import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';

import { Player } from '@core/models/player';
import { Match } from '@core/models/match';
import { MatchTableRow } from '@core/models/match-table-row';
import { matches, players } from './initial-data';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private playersBehaviorSubject: BehaviorSubject<Player[]> = new BehaviorSubject<Player[]>(players);
  private matchesBehaviorSubject: BehaviorSubject<Match[]> = new BehaviorSubject<Match[]>(matches);

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
    values.push({ name: name, setsWon: 0 });
    this.playersBehaviorSubject.next([...values]);
  }

  /**
   * @returns Matches observable
   * @description Returns matches behavior subject as observable
   */
  public getMatchesObs(): Observable<Match[]> {
    return this.matchesBehaviorSubject.asObservable();
  }

  /**
   * @returns Matches observable
   * @description Returns matches behavior subject as observable
   */
  public getMatchesTableRowObs(): Observable<MatchTableRow[]> {
    return this.matchesBehaviorSubject.asObservable().pipe(
      map((value) => {
        return value.map((item) => {
          let firstPlayerSetsWon = 0;
          let secondPlayerSetsWon = 0;
          item.sets.forEach((set) => {
            if (set.firstPlayerScore > set.secondPlayerScore) {
              firstPlayerSetsWon = ++firstPlayerSetsWon;
            } else if (set.secondPlayerScore > set.firstPlayerScore) {
              secondPlayerSetsWon = ++secondPlayerSetsWon;
            }
          });
          return {
            players: item.players.join(' vs. '),
            score: firstPlayerSetsWon + ':' + secondPlayerSetsWon,
            winner: firstPlayerSetsWon > secondPlayerSetsWon ? item.players[0] : item.players[1]
          };
        });
      })
    );
  }

  /**
   * @param match Match
   * @description Adds match by emitting new data with behavior subject
   */
  public addMatch(match: Match): void {
    const values = this.matchesBehaviorSubject.getValue();
    values.push(match);
    this.matchesBehaviorSubject.next([...values]);
  }
}
