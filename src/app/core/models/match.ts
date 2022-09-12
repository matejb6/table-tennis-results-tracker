import { Player } from './player';

export interface Match {
  id: number;
  players: Player[];
  sets: [number, number][];
  score: [number, number];
  winner: Player;
  date: string;
}
