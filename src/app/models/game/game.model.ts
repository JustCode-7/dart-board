import {GameType} from "../enum/GameType";

enum Multiplier {
  EINS = 1,
  ZWEI = 2,
  DREI = 3,
}

interface Player {
  points: number,
  throws: number,
  lastScore: Score,
}

interface Score{
  value: number,
  multiplier: number,
}

export interface Game {
  gameType: GameType,
  players: Player[],
  currentPlayer: Player,
}

export interface DartPlayer {
  id: number,
  name: string,
  throws?: Throw[][],

  remainingPoints: number,
  lastScore: number,
  history: number[],
  cricketMap: Map<number, number>,
  average: number;
}

export interface CricketPlayer {
  id: number,
  name: string,
  throws?: Throw[][],

  accPoints: number,
  lastScore: number,
  history: number[],
  cricketMap: Map<number, number>,
  average: number;
}

export interface Throw {
  value: number,
  multiplier: number,
}

export const DEFAULT_DART_PLAYER: DartPlayer = {
  id: -1,
  name: 'unknown',
  remainingPoints: -1,
  lastScore: -1,
  history: [-1],
  cricketMap: new Map<number, number>(),
  average: 0
};

export const DEFAULT_CRICKET_PLAYER: CricketPlayer = {
  id: -1,
  name: 'unknown',
  accPoints: -1,
  lastScore: -1,
  history: [-1],
  cricketMap: new Map<number, number>(),
  average: 0
};
