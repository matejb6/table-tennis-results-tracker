import { MatchSet } from '../types';

/**
 * Calculates match score from sets
 * @param sets Sets
 * @returns Match score
 */
export const getMatchScore = (sets: MatchSet[]): MatchSet => {
  let scoreA = 0;
  let scoreB = 0;
  sets.forEach((set) => {
    if (set[0] > set[1]) {
      scoreA = ++scoreA;
    } else if (set[1] > set[0]) {
      scoreB = ++scoreB;
    }
  });
  return [scoreA, scoreB];
};
