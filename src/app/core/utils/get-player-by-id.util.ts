import { Player } from '../interfaces';

/**
 * Gets player by ID
 * @param players Players
 * @param id ID
 * @returns Player
 */
export const getPlayerById = (players: Player[], id: number | null): Player | undefined => {
  return players.find((player) => player.id === id);
};
