import { Match, Player } from '../interfaces';

/**
 * Calculates how many sets player won in a match
 * @param player Player
 * @param match Match
 * @returns Player sets won
 */
export const getPlayerSetsWon = (player: Player, match: Match): number => {
  const playerIndex = match.players.indexOf(player);
  const opponentIndex = playerIndex === 0 ? 1 : 0;
  return match.sets
    .map((set) => (set[playerIndex] > set[opponentIndex] ? 1 : (0 as number)))
    .reduce((prev, curr) => prev + curr, 0);
};
