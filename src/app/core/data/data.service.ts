import { Injectable } from '@angular/core';

import { Player } from '@core/models/player';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private players: Player[] = [
    { name: 'Lucija', setsWon: 10 },
    { name: 'Antun', setsWon: 8 },
    { name: 'Matej', setsWon: 5 }
  ];

  public getPlayers(): Player[] {
    return this.players;
  }
}
