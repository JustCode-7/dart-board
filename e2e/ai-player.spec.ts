import {expect, test} from '@playwright/test';

test.describe('KI-Spieler E2E Tests', () => {
  test('KI-Spieler sollte automatisch werfen im Simple501 Modus', async ({page}) => {
    // Console logs sammeln
    const logs: string[] = [];
    page.on('console', msg => {
      logs.push(msg.text());
      console.log(`[BROWSER LOG]: ${msg.text()}`);
    });

    await page.goto('/');
    await page.reload();

    // Wir nutzen die Standard-Spieler ("first", "second")
    // Machen den zweiten Spieler zur KI
    await page.click('button:has-text("+KI-Player")');
    // Löschen den zweiten (menschlichen) "second" Spieler
    await page.locator('button[color="warn"]').nth(1).click();

    // Sicherstellen, dass der erste Spieler (Human) einen Namen hat
    const humanInput = page.locator('input[id^="playerName-"]').nth(0);
    await humanInput.clear();
    await humanInput.fill('HumanFirst');
    await page.keyboard.press('Tab');

    // Warte kurz, damit die Validierung greifen kann
    await page.waitForTimeout(1500);

    // Spiel starten
    const startBtn = page.locator('button[type="submit"]:has-text("Start")');
    await startBtn.click();

    // Warte bis das Dartboard geladen ist
    await expect(page.locator('app-dart-board')).toBeVisible();

    // Mensch ist zuerst am Zug ("HumanFirst")
    const playerNameLocator = page.locator('.player-name');
    await expect(playerNameLocator).toContainText('HumanFirst');

    // 3 Darts werfen (Mensch)
    for (let i = 0; i < 3; i++) {
      const btn = page.locator('#dart-btn-20');
      await btn.waitFor({state: 'visible'});
      await btn.click();
      await page.waitForTimeout(1000);
    }

    // Nach 3 Würfen erscheint die Wechsel-Snackbar
    const snackbar = page.locator('app-switch-player-snack');
    await expect(snackbar).toBeVisible({timeout: 15000});

    // Snackbar schließen
    await page.click('app-switch-player-snack button:has-text("OK")');
    await expect(snackbar).not.toBeVisible();

    // Warte auf KI-Zug
    await page.waitForTimeout(2000);

    // Prüfen ob KI-Name erscheint
    await expect(playerNameLocator).toContainText('KI-', {timeout: 15000});

    // Warte bis die KI fertig ist und wieder der Mensch dran ist
    await expect(playerNameLocator).toContainText('HumanFirst', {timeout: 30000});
  });

  test('KI-Spieler sollte als erster Spieler korrekt agieren', async ({page}) => {
    await page.goto('/');
    await page.reload();

    // Alle vorhandenen Spieler löschen
    await page.locator('button[color="warn"]').nth(1).click();
    await page.locator('button[color="warn"]').nth(0).click();

    // Zuerst menschlichen Spieler hinzufügen (als Anker)
    await page.click('button:has-text("Player")');
    const humanInput = page.locator('input[id^="playerName-"]').first();
    await humanInput.fill('HumanPlayer');
    await page.keyboard.press('Tab');

    // Dann KI-Spieler hinzufügen
    await page.click('button:has-text("+KI-Player")');

    // Wir löschen den Menschen wieder und fügen ihn neu hinzu, damit KI an Position 1 ist
    await page.locator('button[color="warn"]').nth(0).click();
    await page.click('button:has-text("Player")');
    const humanInput2 = page.locator('input[id^="playerName-"]').last();
    await humanInput2.fill('HumanPlayer');
    await page.keyboard.press('Tab');

    // Warte kurz, damit die Validierung greifen kann
    await page.waitForTimeout(1500);

    // Spiel starten
    const startBtn = page.locator('button[type="submit"]:has-text("Start")');
    await startBtn.click();

    await expect(page.locator('app-dart-board')).toBeVisible();

    const playerNameLocator = page.locator('.player-name');
    await expect(playerNameLocator).toContainText('KI-');

    // Warte bis Mensch dran ist
    await expect(playerNameLocator).toContainText('HumanPlayer', {timeout: 30000});
    await page.waitForTimeout(2000);
    await expect(playerNameLocator).toContainText('HumanPlayer');
  });
});
