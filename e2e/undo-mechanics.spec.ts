import {expect, Page, test} from '@playwright/test';

test.describe('Undo-Mechanik E2E Tests', () => {

  test.beforeEach(async ({page}) => {
    await page.goto('/');
    await page.reload();
  });

  async function setupGame(page: Page, gameType: string, aiDifficulty: string = 'Schwer') {
    // Game Type wählen
    await page.locator('mat-select[formControlName="gameType"]').click();
    await page.getByRole('option', {name: gameType, exact: true}).click();

    // Einen KI Spieler hinzufügen
    await page.click('button:has-text("+KI-Player")');

    // Löschen den zweiten (menschlichen) "second" Spieler, damit KI an Position 2 ist
    await page.locator('button[color="warn"]').nth(1).click();

    // Schwierigkeit einstellen
    await page.locator('mat-select[formControlName="difficulty"]').click();
    await page.getByRole('option', {name: aiDifficulty, exact: true}).click();

    // Menschlichen Spieler Namen setzen
    const humanInput = page.locator('input[id^="playerName-"]').nth(0);
    await humanInput.clear();
    await humanInput.fill('HumanPlayer');
    await page.keyboard.press('Tab');

    await page.waitForTimeout(1000);
    await page.locator('button[type="submit"]:has-text("Start")').click();
    await page.waitForLoadState('networkidle');
  }

  async function performUndo(page: Page) {
    await page.click('button[mat-icon-button]:has(mat-icon:text-is("menu"))');
    const undoButton = page.locator('button:has-text("rückgängig")');
    await expect(undoButton).toBeVisible();
    await undoButton.click();
    await page.waitForTimeout(1000);
  }

  async function captureState(page: Page, gameType: string) {
    const name = await page.locator('.player-name').innerText();
    const round = await page.locator('.round-value').innerText();
    const hits = await page.locator('.hit-badge').allInnerTexts();

    let score = '';
    let cricket20 = '';

    if (gameType === '501') {
      const scoreLoc = page.locator('.player-score');
      if (await scoreLoc.isVisible()) {
        score = await scoreLoc.innerText();
      }
    } else {
      const hitCountLoc = page.locator('.mini-player-row.active-player .hit-count').first();
      if (await hitCountLoc.isVisible()) {
        cricket20 = await hitCountLoc.innerText();
      }
    }

    return {
      name: name.trim(),
      round: round.trim().split('/')[0],
      hits: hits.map(h => h.trim()).join(','),
      score: score.trim(),
      cricket20: cricket20.trim()
    };
  }

  test('Simple501: Undo schrittweise über 3 Runden (Mensch + KI)', async ({page}) => {
    test.setTimeout(180000);
    await setupGame(page, '501');

    // Startzustand erfassen
    const initialState = await captureState(page, '501');
    expect(initialState.name).toBe('HumanPlayer');
    expect(initialState.round).toBe('1');
    expect(initialState.score).toBe('501');

    // 3 Runden spielen
    for (let r = 1; r <= 3; r++) {
      console.log(`Starting Round ${r} for HumanPlayer`);
      await expect(page.locator('.player-name')).toContainText('HumanPlayer', {timeout: 60000});

      // 3 Würfe machen
      for (let i = 0; i < 3; i++) {
        await page.locator('#dart-btn-20').click({delay: 1000});
        // Warten bis Hit registriert wurde - aber nur für die ersten zwei,
        // da der dritte den Spielerwechsel triggert und die Badges löscht.
        if (i < 2) {
          await expect(page.locator('.hit-badge')).toHaveCount(i + 1, {timeout: 10000});
        }
      }

      // Warte auf automatischen Spielerwechsel
      console.log(`Waiting for player switch in Round ${r}`);
      await page.waitForTimeout(5000);

      // Warte auf KI Zug
      console.log(`Waiting for AI turn in Round ${r}`);
      await expect(page.locator('.player-name')).toContainText('KI-', {timeout: 30000});
      // Warte bis KI fertig ist und HumanPlayer wieder dran ist
      await expect(page.locator('.player-name')).toContainText('HumanPlayer', {timeout: 60000});
    }

    // Nun Undo bis zum Anfang
    console.log("Starting undo process...");
    let undos = 0;
    let reachedStart = false;

    while (undos < 80) { // Genug Puffer
      await performUndo(page);
      undos++;

      const current = await captureState(page, '501');
      console.log(`Undo #${undos}: ${current.name}, R:${current.round}, S:${current.score}, H:[${current.hits}]`);

      if (current.name === initialState.name &&
        current.round === initialState.round &&
        current.score === initialState.score &&
        current.hits === initialState.hits) {
        reachedStart = true;
        break;
      }
    }

    expect(reachedStart).toBe(true);
    console.log(`Successfully reached start after ${undos} undos.`);
  });

  test('Cricket: Undo schrittweise über 3 Runden (Mensch + KI)', async ({page}) => {
    test.setTimeout(180000);
    await setupGame(page, 'Cricket');

    const initialState = await captureState(page, 'Cricket');
    expect(initialState.name).toBe('HumanPlayer');
    expect(initialState.round).toBe('1');
    expect(initialState.cricket20).toBe('0');

    for (let r = 1; r <= 3; r++) {
      console.log(`Starting Round ${r} for HumanPlayer (Cricket)`);
      await expect(page.locator('.player-name')).toContainText('HumanPlayer', {timeout: 60000});

      for (let i = 0; i < 3; i++) {
        await page.locator('#cricket-btn-20').click({delay: 1000});
      }

      console.log(`Waiting for player switch in Round ${r} (Cricket)`);
      await page.waitForTimeout(5000);

      await expect(page.locator('.player-name')).toContainText('KI-', {timeout: 30000});
      await expect(page.locator('.player-name')).toContainText('HumanPlayer', {timeout: 90000});
    }

    console.log("Starting undo process (Cricket)...");
    let undos = 0;
    let reachedStart = false;

    while (undos < 80) {
      await performUndo(page);
      undos++;

      const current = await captureState(page, 'Cricket');
      console.log(`Undo #${undos}: ${current.name}, R:${current.round}, C20:${current.cricket20}, H:[${current.hits}]`);

      if (current.name === initialState.name &&
        current.round === initialState.round &&
        current.cricket20 === initialState.cricket20 &&
        current.hits === initialState.hits) {
        reachedStart = true;
        break;
      }
    }

    expect(reachedStart).toBe(true);
    console.log(`Successfully reached start after ${undos} undos.`);
  });
});
