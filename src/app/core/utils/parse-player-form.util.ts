import { generateId } from './generate-id.util';
import { AddPlayerFormData, Player } from '../interfaces';

/**
 * Takes player form data and parses it into player data for app usage
 * @param addPlayerFormData Add player form data
 * @returns Player data
 */
export const parsePlayerForm = (addPlayerFormData: AddPlayerFormData): Player => {
  return {
    id: generateId(),
    name: addPlayerFormData.name!,
    matchesPlayed: 0,
    matchesWon: 0,
    setsWon: 0,
  };
};
