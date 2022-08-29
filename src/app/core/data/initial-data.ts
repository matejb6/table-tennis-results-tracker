import { Match } from '@core/models/match';
import { Player } from '@core/models/player';

export const players: Player[] = [
  { name: 'Antun', setsWon: 1 },
  { name: 'Lucija', setsWon: 3 },
  { name: 'Matej', setsWon: 0 }
];

export const matches: Match[] = [
  {
    players: ['Lucija', 'Antun'],
    sets: [
      {
        firstPlayerScore: 11,
        secondPlayerScore: 9
      },
      {
        firstPlayerScore: 10,
        secondPlayerScore: 12
      },
      {
        firstPlayerScore: 12,
        secondPlayerScore: 10
      },
      {
        firstPlayerScore: 11,
        secondPlayerScore: 8
      }
    ]
  }
];
