import {Throw} from "../../models/player/player.model";

interface RippelConstants {
  rippleColor: string;
  rippleRadius: number;
}

/**
 * Noop handler for factory function
 * @return a noop function
 */
export function noop(): Function {
  return () => {
  };
}


export const customRipple: RippelConstants = {rippleRadius: 10, rippleColor: 'orange'}


export function wellFormedArray(arr: number[] | string[]) {
  return arr.reduce((a, b) => a + ' ' + b, '');
}

export const ALL_RANDOM_HIT_TARGETS: Throw[] = [
  ...Array.from({length: 20}, (_, i) => ({value: i + 1, multiplier: 1})),
  ...Array.from({length: 20}, (_, i) => ({value: i + 1, multiplier: 2})),
  ...Array.from({length: 20}, (_, i) => ({value: i + 1, multiplier: 3})),
  {value: 25, multiplier: 1},
  {value: 25, multiplier: 2},
];

export function generateRandomHitTarget(previousTarget?: Throw | null): Throw {
  let target: Throw;
  do {
    const index = Math.floor(Math.random() * ALL_RANDOM_HIT_TARGETS.length);
    target = ALL_RANDOM_HIT_TARGETS[index];
  } while (
    previousTarget &&
    ALL_RANDOM_HIT_TARGETS.length > 1 &&
    target.value === previousTarget.value &&
    target.multiplier === previousTarget.multiplier
  );
  return {...target};
}

export function formatTarget(target: Throw | null | undefined): string {
  if (!target) return '';
  if (target.value === 25) {
    return target.multiplier === 2 ? 'Bullseye' : 'Bull';
  }
  const prefix = target.multiplier === 3 ? 'Triple' : target.multiplier === 2 ? 'Double' : 'Single';
  return `${prefix} ${target.value}`;
}
