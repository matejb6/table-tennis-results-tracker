import { Set } from '../types/set';
import { Player } from './player';

export interface Match {
  id: number;
  players: Player[];
  sets: Set[];
  score: Set;
  winner: Player;
  date: string;
}
