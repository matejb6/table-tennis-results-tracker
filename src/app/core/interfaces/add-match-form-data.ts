import { GameSetFormData } from './game-set-form-data';

export interface AddMatchFormData {
  players: (string | null)[];
  sets: Partial<GameSetFormData>[];
}
