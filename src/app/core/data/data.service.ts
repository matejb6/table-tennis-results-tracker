import { Injectable } from '@angular/core';
import { Player } from '@core/models/player';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private players: Player[] = [
    { position: 1, name: 'Lucija', setsWon: 10 },
    { position: 2, name: 'Antun', setsWon: 8 },
    { position: 3, name: 'Matej', setsWon: 5 }
  ];

  public getPlayers(): Player[] {
    return this.players;
  }
}
