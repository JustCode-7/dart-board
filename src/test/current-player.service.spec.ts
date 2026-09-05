import {TestBed} from '@angular/core/testing';

import {CurrentPlayerService} from '../app/services/current-player.service';
import {PlayerService} from "../app/services/player.service";
import {ALL_RANDOM_HIT_TARGETS, formatTarget, generateRandomHitTarget} from "../app/shared/utils/util";
import {GameType} from "../app/models/enum/GameType";

describe('CurrentPlayerService & RandomHit utilities', () => {
  let service: CurrentPlayerService;
  let playerService: PlayerService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CurrentPlayerService, PlayerService]
    });
    service = TestBed.inject(CurrentPlayerService);
    playerService = TestBed.inject(PlayerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get players with highest points', () => {
    playerService._players = [
      {id: 1, name: 'P1', remainingPoints: 100} as any,
      {id: 2, name: 'P2', remainingPoints: 200} as any,
      {id: 3, name: 'P3', remainingPoints: 200} as any,
    ];

    const winners = service.getPlayersWithHighestPoints();
    expect(winners).toEqual(['P2', 'P3']);
  });

  it('should return empty array if no players', () => {
    playerService._players = [];
    const winners = service.getPlayersWithHighestPoints();
    expect(winners).toEqual([]);
  });

  it('should contain all 62 targets in ALL_RANDOM_HIT_TARGETS', () => {
    expect(ALL_RANDOM_HIT_TARGETS.length).toBe(62);
    // 20 singles, 20 doubles, 20 triples, 1 bull, 1 bullseye
    const singles = ALL_RANDOM_HIT_TARGETS.filter(t => t.multiplier === 1 && t.value <= 20);
    const doubles = ALL_RANDOM_HIT_TARGETS.filter(t => t.multiplier === 2 && t.value <= 20);
    const triples = ALL_RANDOM_HIT_TARGETS.filter(t => t.multiplier === 3 && t.value <= 20);
    const bull = ALL_RANDOM_HIT_TARGETS.filter(t => t.multiplier === 1 && t.value === 25);
    const bullseye = ALL_RANDOM_HIT_TARGETS.filter(t => t.multiplier === 2 && t.value === 25);

    expect(singles.length).toBe(20);
    expect(doubles.length).toBe(20);
    expect(triples.length).toBe(20);
    expect(bull.length).toBe(1);
    expect(bullseye.length).toBe(1);
  });

  it('should format targets correctly', () => {
    expect(formatTarget({value: 20, multiplier: 3})).toBe('Triple 20');
    expect(formatTarget({value: 16, multiplier: 2})).toBe('Double 16');
    expect(formatTarget({value: 5, multiplier: 1})).toBe('Single 5');
    expect(formatTarget({value: 25, multiplier: 1})).toBe('Bull');
    expect(formatTarget({value: 25, multiplier: 2})).toBe('Bullseye');
  });

  it('should generate valid random hit targets', () => {
    for (let i = 0; i < 50; i++) {
      const target = generateRandomHitTarget();
      expect(ALL_RANDOM_HIT_TARGETS.some(t => t.value === target.value && t.multiplier === target.multiplier)).toBeTrue();
    }
  });

  it('should handle RandomHit in isOvershot correctly', () => {
    service.currentGameMode = GameType.RandomHit;
    expect(service.isOvershot(100)).toBeFalse();
  });

  it('should record hitValue in last3History and increment points in scoreRandomHit', () => {
    service.currentGameMode = GameType.RandomHit;
    const player: any = {id: 1, name: 'Player1', remainingPoints: 0, history: [], last3History: []};
    playerService._players = [player];
    service.init(player);

    // Hit with Triple 20 (hitValue = 60, point = 1)
    service.scoreRandomHit(1, true, 60);
    expect(service.last3HisSignal()).toEqual([60]);
    expect(service._remainingPointsToDisplay()).toBe(1);

    // Miss (hitValue = 0, point = 0)
    service.scoreRandomHit(0, false, 0);
    expect(service.last3HisSignal()).toEqual([60, 0]);
    expect(service._remainingPointsToDisplay()).toBe(1);

    // Hit with Single 5 (hitValue = 5, point = 1)
    service.scoreRandomHit(1, true, 5);
    expect(service.last3HisSignal()).toEqual([60, 0, 5]);
    expect(service._remainingPointsToDisplay()).toBe(2);
  });
});
