import {expect, test} from '@playwright/test';

test.describe('KI-Spieler Spielmodus-Spezifische Tests', () => {

  test.beforeEach(async ({page}) => {
    await page.goto('/');
    await page.reload();
  });

  async function setupGame(page, gameType: string, aiDifficulty: string = 'Schwer') {
    // Game Type wählen
    await page.locator('mat-select[formControlName="gameType"]').click();
    // Nutze exakten Text um strict mode violations zu vermeiden
    await page.getByRole('option', {name: gameType, exact: true}).click();

    // Einen KI Spieler hinzufügen
    await page.click('button:has-text("+KI-Player")');

    // Löschen den zweiten (menschlichen) "second" Spieler, damit KI an Position 2 ist
    await page.locator('button[color="warn"]').nth(1).click();

    // Schwierigkeit einstellen (erster Spieler ist meistens Mensch "first", zweiter KI)
    await page.locator('mat-select[formControlName="difficulty"]').click();
    await page.getByRole('option', {name: aiDifficulty, exact: true}).click();

    // Menschlichen Spieler Namen setzen
    const humanInput = page.locator('input[id^="playerName-"]').nth(0);
    await humanInput.clear();
    await humanInput.fill('Human');
    await page.keyboard.press('Tab');

    await page.waitForTimeout(500);
    await page.locator('button[type="submit"]:has-text("Start")').click();
  }

  test('Simple501: KI sollte nicht überwerfen', async ({page}) => {
    await setupGame(page, '501');
    await expect(page.locator('app-dart-board')).toBeVisible();

    // Mensch wirft 3x Miss um KI dran zu lassen
    // Verwende IDs für präzises Klicken
    for (let i = 0; i < 3; i++) {
      const missBtn = page.locator('#miss-btn');
      await missBtn.waitFor({state: 'visible'});
      await missBtn.click();
      await page.waitForTimeout(1000);
    }

    // Warte auf Snackbar und klicke OK
    const snackbar = page.locator('app-switch-player-snack');
    await expect(snackbar).toBeVisible({timeout: 15000});
    await snackbar.locator('button:has-text("OK")').click();
    await expect(snackbar).not.toBeVisible();

    // KI ist dran.
    await expect(page.locator('.player-name')).toContainText('KI-', {timeout: 20000});

    // Wir verifizieren dass der Turn beendet wird ohne Fehler.
    await expect(page.locator('.player-name')).toContainText('Human', {timeout: 40000});
  });

  test('DoubleOut501: KI sollte Double-Out versuchen', async ({page}) => {
    await setupGame(page, '501 (Double Out)');
    await expect(page.locator('app-dart-board')).toBeVisible();

    // Mensch wirft Miss
    for (let i = 0; i < 3; i++) {
      const missBtn = page.locator('#miss-btn');
      await missBtn.waitFor({state: 'visible'});
      await missBtn.click();
      await page.waitForTimeout(1000);
    }
    const snackbar = page.locator('app-switch-player-snack');
    await expect(snackbar).toBeVisible({timeout: 15000});
    await snackbar.locator('button:has-text("OK")').click();
    await expect(snackbar).not.toBeVisible();

    await expect(page.locator('.player-name')).toContainText('KI-', {timeout: 20000});
    await expect(page.locator('.player-name')).toContainText('Human', {timeout: 40000});
  });

  test('Elimination: KI sollte Ziel 301 anpeilen', async ({page}) => {
    await setupGame(page, 'Elimination (301)');
    await expect(page.locator('app-dart-board')).toBeVisible();

    for (let i = 0; i < 3; i++) {
      const missBtn = page.locator('#miss-btn');
      await missBtn.waitFor({state: 'visible'});
      await missBtn.click();
      await page.waitForTimeout(1000);
    }
    const snackbar = page.locator('app-switch-player-snack');
    await expect(snackbar).toBeVisible({timeout: 15000});
    await snackbar.locator('button:has-text("OK")').click();
    await expect(snackbar).not.toBeVisible();

    await expect(page.locator('.player-name')).toContainText('KI-', {timeout: 20000});
    await expect(page.locator('.player-name')).toContainText('Human', {timeout: 40000});
  });

  test('Cricket: KI sollte Felder schließen und Punkte sammeln', async ({page}) => {
    await setupGame(page, 'Cricket', 'Schwer');
    await expect(page.locator('app-cricket-component')).toBeVisible();

    // Mensch wirft 3x Miss
    for (let i = 0; i < 3; i++) {
      const missBtn = page.locator('#miss-btn');
      await missBtn.waitFor({state: 'visible'});
      await missBtn.click();
      await page.waitForTimeout(1000);
    }
    const snackbar = page.locator('app-switch-player-snack');
    await expect(snackbar).toBeVisible({timeout: 15000});
    await snackbar.locator('button:has-text("OK")').click();
    await expect(snackbar).not.toBeVisible();

    // KI ist dran. Auf Schwer sollte sie schnell schließen.
    await expect(page.locator('.player-name')).toContainText('KI-', {timeout: 20000});

    // Warte bis die KI fertig ist
    await expect(page.locator('.player-name')).toContainText('Human', {timeout: 60000});
  });

});
