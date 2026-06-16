import { Player } from '../interfaces';

/**
 * Sort players compare function, sorts players by sets won from higher to lower
 * @param a Player A
 * @param b Player B
 * @returns Players by sets won comparison
 */
export const comparePlayersBySetsWon = (a: Player, b: Player): number => {
  return b.setsWon - a.setsWon;
};
