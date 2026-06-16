import { Player } from '../interfaces';

/**
 * Gets player by name
 * @param players Players
 * @param name Name
 * @returns Player
 */
export const getPlayerByName = (players: Player[], name: string | null): Player | undefined => {
  return players.find((player) => player.name === name);
};
