import { Injectable } from '@angular/core';
import { BehaviorSubject, firstValueFrom, map, Observable } from 'rxjs';

import { Player } from '@core/models/player';
import { Match } from '@core/models/match';
import { PlayerTableRow } from '@core/models/player-table-row';
import { MatchTableRow } from '@core/models/match-table-row';
import { AddPlayerFormData } from '@shared/components/add-player-dialog/add-player-dialog.component';
import { AddMatchFormData } from '@shared/components/add-match-dialog/add-match-dialog.component';
import { matches, players } from './initial-data';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private playersBehaviorSubject: BehaviorSubject<Player[]> = new BehaviorSubject<Player[]>(players);
  private matchesBehaviorSubject: BehaviorSubject<Match[]> = new BehaviorSubject<Match[]>(matches);

  /**
   * @returns Generated ID
   * @description Generated unique ID as a date time stamp
   */
  private generateId(): number {
    return new Date().getTime();
  }

  private getMatchScore(sets: [number, number][]): [number, number] {
    let scoreA: number = 0;
    let scoreB: number = 0;
    sets.forEach((set) => {
      if (set[0] > set[1]) {
        scoreA = ++scoreA;
      } else if (set[1] > set[0]) {
        scoreB = ++scoreB;
      }
    });
    return [scoreA, scoreB];
  }

  private getMatchWinner(players: Player[], sets: [number, number][]): Player {
    const score = this.getMatchScore(sets);
    return score[0] > score[1] ? players[0] : players[1];
  }

  private findPlayerByName(playerName: string | null): Player {
    return players.find((player) => player.name === playerName)!;
  }

  private parsePlayerDataFromForm(addPlayerFormData: AddPlayerFormData): Player {
    return { id: this.generateId(), name: addPlayerFormData.name!, matchesPlayed: 0, matchesWon: 0, setsWon: 0 };
  }

  private parseMatchDataFromForm(addMatchFormData: AddMatchFormData): Match {
    const id = this.generateId();
    const players: Player[] = addMatchFormData.players.map(this.findPlayerByName.bind(this));
    const sets: [number, number][] = addMatchFormData.sets.map((item) => [
      item.firstPlayerScore!,
      item.secondPlayerScore!
    ]);
    const score = this.getMatchScore(sets);
    const winner: Player = this.getMatchWinner(players, sets);
    const date = new Date(id).toUTCString();
    return { id: id, players: players, sets: sets, score: score, winner: winner, date: date };
  }

  /**
   * @param a Player A
   * @param b Player B
   * @returns Players by sets won comparison
   * @description Sort players compare function, sorts players by sets won from higher to lower
   */
  private playerTableRowsBySetsWon(a: PlayerTableRow, b: PlayerTableRow): number {
    return b.setsWon - a.setsWon;
  }

  private mapPlayerTableRows(players: Player[]): PlayerTableRow[] {
    return players
      .map((player, index) => {
        return {
          id: player.id,
          position: index,
          name: player.name,
          setsWon: player.setsWon
        };
      })
      .sort(this.playerTableRowsBySetsWon.bind(this))
      .map((player, index) => {
        return {
          id: player.id,
          position: index + 1,
          name: player.name,
          setsWon: player.setsWon
        };
      });
  }

  private mapMatchTableRows(matches: Match[]): MatchTableRow[] {
    return matches.map((match) => {
      return {
        id: match.id,
        players: match.players.map((player) => player.name).join(' vs. '),
        score: `${match.score[0]}:${match.score[1]}`,
        winner: match.winner.name
      };
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
   * @returns Player
   * @description Finds player by ID
   */
  public async getPlayerById(id: number): Promise<Player | undefined> {
    return await firstValueFrom(this.getPlayersObs().pipe(map((value) => value.find((item) => item.id === id))));
  }

  /**
   * @returns Matches observable
   * @description Returns matches behavior subject as observable
   */
  public getMatchesObs(): Observable<Match[]> {
    return this.matchesBehaviorSubject.asObservable();
  }

  /**
   * @returns Match
   * @description Finds match by ID
   */
  public async getMatchById(id: number): Promise<Match | undefined> {
    return await firstValueFrom(this.getMatchesObs().pipe(map((value) => value.find((item) => item.id === id))));
  }

  /**
   * @returns Players table row observable
   * @description Returns players table row behavior subject as observable
   */
  public getPlayerTableRowsObs(): Observable<PlayerTableRow[]> {
    return this.playersBehaviorSubject.asObservable().pipe(map(this.mapPlayerTableRows.bind(this)));
  }

  /**
   * @returns Match table rows observable
   * @description Returns match table rows behavior subject as observable
   */
  public getMatchTableRowsObs(): Observable<MatchTableRow[]> {
    return this.matchesBehaviorSubject.asObservable().pipe(map(this.mapMatchTableRows.bind(this)));
  }

  /**
   * @param addPlayerFormData Form data
   * @description Adds player by emitting new data with behavior subject
   */
  public addPlayer(addPlayerFormData: AddPlayerFormData): void {
    const players = this.playersBehaviorSubject.getValue();
    players.push(this.parsePlayerDataFromForm(addPlayerFormData));
    this.playersBehaviorSubject.next([...players]);
  }

  private getPlayerSetsWon(player: Player, match: Match): number {
    const playerIndex = match.players.indexOf(player);
    const opponentIndex = playerIndex === 0 ? 1 : 0;
    return match.sets
      .map((set) => (set[playerIndex] > set[opponentIndex] ? 1 : (0 as number)))
      .reduce((prev, curr) => prev + curr, 0);
  }

  /**
   * @param match Match
   * @description Update players by emitting new data with behavior subject
   */
  private updatePlayers(match: Match): void {
    const matchPlayers: Player[] = match.players.map((matchPlayer) => {
      return {
        id: matchPlayer.id,
        name: matchPlayer.name,
        matchesPlayed: 1,
        matchesWon: match.winner.id === matchPlayer.id ? 1 : 0,
        setsWon: this.getPlayerSetsWon(matchPlayer, match)
      };
    });
    this.playersBehaviorSubject.getValue().forEach((player) => {
      const matchPlayer = matchPlayers.find((item) => item.id === player.id);
      if (matchPlayer) {
        player.matchesPlayed = player.matchesPlayed + matchPlayer.matchesPlayed;
        player.matchesWon = player.matchesWon + matchPlayer.matchesWon;
        player.setsWon = player.setsWon + matchPlayer.setsWon;
      }
    });
  }

  /**
   * @param addMatchFormData Form data
   * @description Adds match by emitting new data with behavior subject
   */
  public addMatch(addMatchFormData: AddMatchFormData): void {
    const matches = this.matchesBehaviorSubject.getValue();
    const newMatch = this.parseMatchDataFromForm(addMatchFormData);
    matches.push(newMatch);
    this.matchesBehaviorSubject.next([...matches]);
    this.updatePlayers(newMatch);
  }
}
