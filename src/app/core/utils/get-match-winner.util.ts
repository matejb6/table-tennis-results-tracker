import { Player } from '../interfaces';
import { MatchSet } from '../types';

/**
 * Calculates match winner
 * @param score Score
 * @param players Players
 * @returns Winner
 */
export const getMatchWinner = (score: MatchSet, players: Player[]): Player => {
  return score[0] > score[1] ? players[0] : players[1];
};
