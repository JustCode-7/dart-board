import {Injectable} from '@angular/core';
import {Difficulty, Player, Throw} from '../models/player/player.model';
import {GameType} from '../models/enum/GameType';

@Injectable({
  providedIn: 'root'
})
export class AIService {

  getNextThrow(difficulty: Difficulty, gameType: GameType, player: Player, allPlayers: Player[]): Throw {
    // Basic logic: Higher difficulty = better chance for high multipliers and specific targets

    if (gameType === GameType.Cricket) {
      return this.getCricketThrow(difficulty, player, allPlayers);
    }
    return this.getPointsThrow(difficulty, player, allPlayers, gameType);
  }

  private getPointsThrow(difficulty: Difficulty, player: Player, allPlayers: Player[], gameType: GameType): Throw {
    const random = Math.random();
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
      const killTarget = allPlayers.find(p => p.id !== player.id && p.remainingPoints > 0 && p.remainingPoints === currentPointsWithPotential + needed);
      // Wait, that's just the win target.
      // A kill target is any opponent's current score.
      const opponentsToKill = allPlayers.filter(p => p.id !== player.id && p.remainingPoints > 0);

      let bestKillValue = -1;
      let bestKillMultiplier = -1;

      for (const opp of opponentsToKill) {
        const toHit = opp.remainingPoints - currentPointsWithPotential;
        if (toHit > 0 && toHit <= 60) {
          // Check if it's hitabel with one dart
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

    // Probability distributions based on difficulty
    const hitTargetChance = difficulty === Difficulty.Hard ? 0.8 : (difficulty === Difficulty.Medium ? 0.5 : 0.2);
    const missSlightlyChance = difficulty === Difficulty.Hard ? 0.15 : (difficulty === Difficulty.Medium ? 0.3 : 0.4);

    if (random < hitTargetChance) {
      // Hit the intended target
      return {value: targetValue, multiplier: targetMultiplier};
    } else if (random < hitTargetChance + missSlightlyChance) {
      // Hit target value but wrong multiplier or adjacent number
      const secondaryRandom = Math.random();
      if (secondaryRandom < 0.5) {
        // Same value, different multiplier
        return {value: targetValue, multiplier: 1};
      } else {
        // Adjacent-like miss (just pick a common neighbor or random small)
        const neighbors = [1, 5, 20];
        return {value: neighbors[Math.floor(Math.random() * neighbors.length)], multiplier: 1};
      }
    } else {
      // Complete miss or very wrong number
      const missRandom = Math.random();
      if (missRandom < 0.3) return {value: 0, multiplier: 1};
      return {value: Math.floor(Math.random() * 20) + 1, multiplier: 1};
    }
  }

  private getCricketThrow(difficulty: Difficulty, player: Player, allPlayers: Player[]): Throw {
    const targets = [20, 19, 18, 17, 16, 15, 25];
    const cricketMap = player.cricketMap;
    let openTargets = targets.filter(t => (cricketMap.get(t) || 0) < 3);

    let target = 20;

    if (openTargets.length > 0) {
      // Prioritize highest open target
      target = openTargets[0];
    } else {
      // All closed for current player. Find highest scorable target for points.
      // A target is scorable if at least one other player has it NOT closed.
      const scorableTargets = targets.filter(t =>
        allPlayers.some(p => p.id !== player.id && (p.cricketMap.get(t) || 0) < 3)
      );

      if (scorableTargets.length > 0) {
        target = scorableTargets[0];
      } else {
        // Everything closed for everyone. Just hit anything.
        target = 20;
      }
    }

    const random = Math.random();
    let value = target;
    let multiplier = 1;

    // Difficulty-based target selection
    const hitTargetChance = difficulty === Difficulty.Hard ? 0.8 : (difficulty === Difficulty.Medium ? 0.5 : 0.2);

    if (random < hitTargetChance) {
      value = target;
      if (target === 25) {
        multiplier = (difficulty === Difficulty.Hard && Math.random() < 0.4) ? 2 : 1;
      } else {
        const multiRand = Math.random();
        if (difficulty === Difficulty.Hard) {
          if (multiRand < 0.5) multiplier = 3;
          else if (multiRand < 0.8) multiplier = 2;
          else multiplier = 1;
        } else if (difficulty === Difficulty.Medium) {
          if (multiRand < 0.2) multiplier = 3;
          else if (multiRand < 0.5) multiplier = 2;
          else multiplier = 1;
        } else {
          multiplier = 1;
        }
      }
    } else {
      // Missed target, hit something else or 0
      const missRandom = Math.random();
      if (missRandom < 0.7) {
        value = targets[Math.floor(Math.random() * targets.length)];
        multiplier = 1;
      } else {
        value = 0;
        multiplier = 1;
      }
    }

    return {value, multiplier};
  }
}
