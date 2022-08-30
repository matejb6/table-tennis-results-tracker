import { Match } from '@core/models/match';
import { Player } from '@core/models/player';

export const players: Player[] = [
  { id: 1660986000000, name: 'Antun', matchesPlayed: 1, matchesWon: 0, setsWon: 1 },
  { id: 1660982400000, name: 'Lucija', matchesPlayed: 1, matchesWon: 1, setsWon: 3 },
  { id: 1660989600000, name: 'Matej', matchesPlayed: 0, matchesWon: 0, setsWon: 0 }
];

export const matches: Match[] = [
  {
    id: 1661068800000,
    players: [players[1], players[0]],
    sets: [
      [11, 9],
      [10, 12],
      [12, 10],
      [11, 8]
    ],
    score: [3, 1],
    winner: players[1],
    date: new Date(1661068800000).toUTCString()
  }
];
