import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

import { Player } from '@core/models/player';
import { players } from './initial-data';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private playersBehaviorSubject: BehaviorSubject<Player[]> = new BehaviorSubject(players);

  constructor() {
    this.sortPlayersOnChange();
  }

  /**
   * @param a Player A
   * @param b Player B
   * @returns Players by sets won comparison
   * @description Players sort compare function, sort players by sets won from higher to lower
   */
  private playersBySetsWon(a: Player, b: Player): number {
    return b.setsWon - a.setsWon;
  }

  /**
   * @description Sorts players on change
   */
  private sortPlayersOnChange(): void {
    this.playersBehaviorSubject.subscribe({
      next: (value) => value.sort(this.playersBySetsWon.bind(this))
    });
  }

  /**
   * @returns Players observable
   * @description Returns players behavior subject as observable
   */
  public getPlayersObs(): Observable<Player[]> {
    return this.playersBehaviorSubject.asObservable();
  }

  /**
   * @param name Name
   * @description Adds player by emitting new data with behavior subject
   */
  public addPlayer(name: string): void {
    const values = this.playersBehaviorSubject.getValue();
    values.push({ position: values.length + 1, name: name, setsWon: 0 });
    this.playersBehaviorSubject.next([...values]);
  }
}
