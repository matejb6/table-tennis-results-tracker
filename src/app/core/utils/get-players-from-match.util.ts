import { getPlayerSetsWon } from './get-player-sets-won.util';
import { Match, Player } from '../interfaces';

/**
 * Parses match players data into players data
 * @param match Match
 * @returns Players
 */
export const getPlayersFromMatch = (match: Match): Player[] => {
  return match.players.map((matchPlayer) => ({
    id: matchPlayer.id,
    name: matchPlayer.name,
    matchesPlayed: 1,
    matchesWon: match.winner.id === matchPlayer.id ? 1 : 0,
    setsWon: getPlayerSetsWon(matchPlayer, match),
  }));
};
