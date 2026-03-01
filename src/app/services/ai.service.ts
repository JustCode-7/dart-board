import {Injectable} from '@angular/core';
import {Difficulty, Player, Throw} from '../models/player/player.model';
import {GameType} from '../models/enum/GameType';

@Injectable({
  providedIn: 'root'
})
export class AIService {

  private readonly DARTBOARD_VALUES = [20, 1, 18, 4, 13, 6, 10, 15, 2, 17, 3, 19, 7, 16, 8, 11, 14, 9, 12, 5];

  getNextThrow(difficulty: Difficulty, gameType: GameType, player: Player, allPlayers: Player[]): Throw {
    // Basic logic: Higher difficulty = better chance for high multipliers and specific targets

    if (gameType === GameType.Cricket) {
      return this.getCricketThrow(difficulty, player, allPlayers);
    }
    return this.getPointsThrow(difficulty, player, allPlayers, gameType);
  }

  private getPointsThrow(difficulty: Difficulty, player: Player, allPlayers: Player[], gameType: GameType): Throw {
    const remainingPoints = player.remainingPoints;

    // Target selection strategy
    let targetValue = 20;
    let targetMultiplier = 3;

    if (gameType === GameType.Highscore) {
      targetValue = 20;
      targetMultiplier = 3;
    } else if (gameType === GameType.DoubleOut501 || gameType === GameType.Simple501) {
      if (remainingPoints <= 60) {
        // Try to checkout
        if (gameType === GameType.DoubleOut501) {
          if (remainingPoints % 2 === 0 && remainingPoints <= 40) {
            targetValue = remainingPoints / 2;
            targetMultiplier = 2;
          } else if (remainingPoints === 50) {
            targetValue = 25;
            targetMultiplier = 2;
          } else if (remainingPoints > 40 && remainingPoints <= 60) {
            // Setup for a double
            const neededForEven = remainingPoints - 40; // Aim for 40 left (D20)
            targetValue = neededForEven;
            targetMultiplier = 1;
          } else {
            // Odd number or too high, aim for something to get to a double
            // If odd and <= 40, aim for 1 to make it even
            if (remainingPoints < 40) {
              targetValue = 1;
              targetMultiplier = 1;
            } else {
              targetValue = 20;
              targetMultiplier = 1;
            }
          }
        } else { // Simple501
          if (remainingPoints <= 20) {
            targetValue = remainingPoints;
            targetMultiplier = 1;
          } else if (remainingPoints === 25) {
            targetValue = 25;
            targetMultiplier = 1;
          } else if (remainingPoints === 50) {
            targetValue = 25;
            targetMultiplier = 2;
          } else {
            targetValue = 20;
            targetMultiplier = 1; // Aim for single 20 to be safe
          }
        }
      }

      // Check for overshot risk
      const potentialPoints = targetValue * targetMultiplier;
      if (gameType === GameType.DoubleOut501) {
        if (remainingPoints - potentialPoints < 2 && remainingPoints - potentialPoints !== 0) {
          // Risk of overshot (leaving 1 or < 0)
          targetValue = 1;
          targetMultiplier = 1;
        }
      } else if (remainingPoints - potentialPoints < 0) {
        // Risk of overshot (< 0)
        targetValue = 1;
        targetMultiplier = 1;
      }
    } else if (gameType === GameType.Elimination301) {
      const target = 301;
      const currentPointsWithPotential = remainingPoints; // Elimination counts up
      const needed = target - currentPointsWithPotential;

      // "Kill" strategy: can we hit an opponent's score?
      const opponentsToKill = allPlayers.filter(p => p.id !== player.id && p.remainingPoints > 0);

      let bestKillValue = -1;
      let bestKillMultiplier = -1;

      for (const opp of opponentsToKill) {
        const toHit = opp.remainingPoints - currentPointsWithPotential;
        if (toHit > 0 && toHit <= 60) {
          // Check if it's hittable with one dart
          if (toHit <= 20) {
            bestKillValue = toHit;
            bestKillMultiplier = 1;
            break;
          }
          if (toHit % 3 === 0 && toHit / 3 <= 20) {
            bestKillValue = toHit / 3;
            bestKillMultiplier = 3;
            break;
          }
          if (toHit % 2 === 0 && toHit / 2 <= 20) {
            bestKillValue = toHit / 2;
            bestKillMultiplier = 2;
            break;
          }
          if (toHit === 25) {
            bestKillValue = 25;
            bestKillMultiplier = 1;
            break;
          }
          if (toHit === 50) {
            bestKillValue = 25;
            bestKillMultiplier = 2;
            break;
          }
        }
      }

      if (bestKillValue !== -1 && (difficulty === Difficulty.Hard || (difficulty === Difficulty.Medium && Math.random() < 0.5))) {
        targetValue = bestKillValue;
        targetMultiplier = bestKillMultiplier;
      } else if (needed <= 60) {
        if (needed <= 20) {
          targetValue = Math.max(1, needed); // Never target 0
          targetMultiplier = 1;
        } else if (needed % 3 === 0 && needed / 3 <= 20) {
          targetValue = needed / 3;
          targetMultiplier = 3;
        } else if (needed % 2 === 0 && needed / 2 <= 20) {
          targetValue = needed / 2;
          targetMultiplier = 2;
        } else if (needed === 25) {
          targetValue = 25;
          targetMultiplier = 1;
        } else if (needed === 50) {
          targetValue = 25;
          targetMultiplier = 2;
        } else {
          targetValue = 1; // Just get closer
          targetMultiplier = 1;
        }
      } else {
        targetValue = 20;
        targetMultiplier = 3;
      }
    }

    return this.calculateThrowWithSpread(targetValue, targetMultiplier, difficulty, player);
  }

  private calculateThrowWithSpread(targetValue: number, targetMultiplier: number, difficulty: Difficulty, player: Player): Throw {
    // Standardabweichung basierend auf Schwierigkeit (in mm auf einer Standard-Dartscheibe Radius 170mm)
    let sigma = 40; // Easy
    if (difficulty === Difficulty.Medium) sigma = 20;
    if (difficulty === Difficulty.Hard) sigma = 8;

    // Menschlicher Faktor: Tagesform/Druck basierend auf last3History
    if (player.last3History && player.last3History.length > 0) {
      const avgLast3 = player.last3History.reduce((a, b) => a + b, 0) / player.last3History.length;
      // Wenn der Durchschnitt der letzten 3 Würfe niedrig ist (< 20), steigt die Streuung leicht an (Druck/Frust)
      if (avgLast3 < 20) {
        sigma *= 1.2;
      } else if (avgLast3 > 40) {
        // Lauf: Streuung sinkt leicht
        sigma *= 0.9;
      }
    }

    // Ziel-Koordinaten (Polar: Radius r, Winkel theta)
    // Radius: Bullseye=0, Double Ring=170mm
    // Winkel: 20 ist oben (90 Grad oder pi/2)
    let targetR = 0;
    let targetTheta = 0;

    if (targetValue === 0) {
      targetR = 200; // Irgendwo draußen
    } else if (targetValue === 25) {
      targetR = targetMultiplier === 2 ? 6 : 12; // Bullseye (D25) vs Single Bull (S25)
    } else {
      // Normale Felder
      const angleStep = (2 * Math.PI) / 20;
      const index = this.DARTBOARD_VALUES.indexOf(targetValue);
      // Index 0 (20) ist bei 90 Grad (pi/2)
      targetTheta = (Math.PI / 2) - (index * angleStep);

      if (targetMultiplier === 3) targetR = 105; // Triple Ring Radius (ca. 107mm Mitte)
      else if (targetMultiplier === 2) targetR = 165; // Double Ring Radius (ca. 167mm Mitte)
      else targetR = 135; // Single Feld (zwischen Triple und Double)
    }

    // Gaußsche Streuung (Box-Muller)
    const u1 = Math.random();
    const u2 = Math.random();
    const mag = sigma * Math.sqrt(-2.0 * Math.log(u1));
    const hitX = targetR * Math.cos(targetTheta) + mag * Math.cos(2.0 * Math.PI * u2);
    const hitY = targetR * Math.sin(targetTheta) + mag * Math.sin(2.0 * Math.PI * u2);

    // Zurück in Polarkoordinaten
    const hitR = Math.sqrt(hitX * hitX + hitY * hitY);
    let hitTheta = Math.atan2(hitY, hitX);

    return this.mapCoordinatesToThrow(hitR, hitTheta);
  }

  private mapCoordinatesToThrow(r: number, theta: number): Throw {
    // Bullseye Check
    if (r < 6.35) return {value: 25, multiplier: 2}; // Double Bull
    if (r < 15.9) return {value: 25, multiplier: 1}; // Single Bull

    if (r > 170) return {value: 0, multiplier: 1}; // Out

    // Winkel normalisieren auf [0, 2pi)
    let normalizedTheta = (theta + (Math.PI / 2) + (Math.PI / 20)) % (2 * Math.PI);
    if (normalizedTheta < 0) normalizedTheta += 2 * Math.PI;

    const angleStep = (2 * Math.PI) / 20;
    let index = Math.floor((2 * Math.PI - normalizedTheta) / angleStep) % 20;
    // Fix für negative/verschobene Indizes
    if (index < 0) index += 20;

    const value = this.DARTBOARD_VALUES[index];

    let multiplier = 1;
    if (r >= 99 && r <= 107) multiplier = 3; // Triple
    else if (r >= 162 && r <= 170) multiplier = 2; // Double

    return {value, multiplier};
  }

  private getCricketThrow(difficulty: Difficulty, player: Player, allPlayers: Player[]): Throw {
    const targets = [20, 19, 18, 17, 16, 15, 25];
    const cricketMap = player.cricketMap;
    let openTargets = targets.filter(t => (cricketMap.get(t) || 0) < 3);

    let targetValue = 20;
    let targetMultiplier = 1;

    if (openTargets.length > 0) {
      // Prioritize highest open target
      targetValue = openTargets[0];
    } else {
      // All closed for current player. Find highest scorable target for points.
      // A target is scorable if at least one other player has it NOT closed.
      const scorableTargets = targets.filter(t =>
        allPlayers.some(p => p.id !== player.id && (p.cricketMap.get(t) || 0) < 3)
      );

      if (scorableTargets.length > 0) {
        targetValue = scorableTargets[0];
      } else {
        // Everything closed for everyone. Just hit anything.
        targetValue = 20;
      }
    }

    if (targetValue !== 25) {
      // Aim for triples in Cricket if not Bullseye
      targetMultiplier = 3;
      if (difficulty === Difficulty.Easy) targetMultiplier = 1;
      else if (difficulty === Difficulty.Medium && Math.random() < 0.5) targetMultiplier = 1;
    } else {
      targetMultiplier = difficulty === Difficulty.Hard ? 2 : 1;
    }

    return this.calculateThrowWithSpread(targetValue, targetMultiplier, difficulty, player);
  }
}
