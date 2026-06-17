import { Player } from './player';
import { MatchSet } from '../types/match-set';

export interface Match {
  id: number;
  players: Player[];
  sets: MatchSet[];
  score: MatchSet;
  winner: Player;
  date: string;
}
