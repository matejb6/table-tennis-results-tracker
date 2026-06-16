import { Match } from '../interfaces';

/**
 * Gets match by ID
 * @param matches Matches
 * @param id ID
 * @returns Player
 */
export const getMatchById = (matches: Match[], id: number | null): Match | undefined => {
  return matches.find((match) => match.id === id);
};
