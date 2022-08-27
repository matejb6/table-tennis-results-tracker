import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

import { Player } from '@core/models/player';
import { players } from './initial-data';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private playersBehaviorSubject: BehaviorSubject<Player[]> = new BehaviorSubject(players);
  public $playersObs: Observable<Player[]> = this.playersBehaviorSubject.asObservable();

  constructor() {}

  /**
   * @returns Players observable
   * @description Returns players behavior subject as observable
   */
  public getPlayersObs(): Observable<Player[]> {
    return this.playersBehaviorSubject.asObservable();
  }

  /**
   * @param name: Name
   * @description Adds player by emitting new data with behavior subject
   */
  public addPlayer(name: string): void {
    const values = this.playersBehaviorSubject.getValue();
    values.push({ name: name, setsWon: 0 });
    this.playersBehaviorSubject.next([...values]);
  }
}
