import { GameSetFormData } from './game-set-form-data';

export interface AddMatchFormData {
  firstPlayer: string | null;
  secondPlayer: string | null;
  sets: Partial<GameSetFormData>[];
}
