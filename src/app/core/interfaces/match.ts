import { Player } from './player';
import { Set } from '../types/set';

export interface Match {
  id: number;
  players: Player[];
  sets: Set[];
  score: Set;
  winner: Player;
  date: string;
}
