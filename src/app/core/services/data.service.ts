import { Injectable } from '@angular/core';
import { BehaviorSubject, firstValueFrom, map, Observable } from 'rxjs';

import { MATCHES, PLAYERS } from '@data/initial-data';
import { MatchDataService } from './match-data.service';
import { FormParseService } from './form-parse.service';
import { AddPlayerFormData, AddMatchFormData, Player, Match, PlayerTableRow, MatchTableRow } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private players$ = new BehaviorSubject<Player[]>(PLAYERS);
  private matches$ = new BehaviorSubject<Match[]>(MATCHES);

  /**
   * Maps players data into player table rows data
   * @param players Players
   * @returns Players table row
   */
  private mapPlayerTableRows(players: Player[]): PlayerTableRow[] {
    return players.sort(MatchDataService.playerTableRowsBySetsWon.bind(this)).map((player, index) => ({
      id: player.id,
      position: index + 1,
      name: player.name,
      setsWon: player.setsWon
    }));
  }

  /**
   * Maps matches data into match table rows data
   * @param matches Matches
   * @returns Matches table row
   */
  private mapMatchTableRows(matches: Match[]): MatchTableRow[] {
    return matches.map((match) => ({
      id: match.id,
      players: match.players.map((player) => player.name).join(' vs. '),
      score: `${match.score[0]}:${match.score[1]}`,
      winner: match.winner.name
    }));
  }

  /**
   * Update players with last match, creates new match players data which are added to existing players
   * @param match Match
   */
  private updatePlayers(match: Match): void {
    const lastMatchPlayers: Player[] = MatchDataService.getMatchPlayersData(match);
    this.players$.getValue().forEach((player) => {
      const matchPlayer = MatchDataService.findPlayerById(lastMatchPlayers, player.id);
      if (matchPlayer) {
        player.matchesPlayed = player.matchesPlayed + matchPlayer.matchesPlayed;
        player.matchesWon = player.matchesWon + matchPlayer.matchesWon;
        player.setsWon = player.setsWon + matchPlayer.setsWon;
      }
    });
  }

  /**
   * Returns players behavior subject as observable
   * @returns Players observable
   */
  public getPlayersObs(): Observable<Player[]> {
    return this.players$.asObservable();
  }

  /**
   * Returns players table row behavior subject as observable
   * @returns Players table row observable
   */
  public getPlayerTableRowsObs(): Observable<PlayerTableRow[]> {
    return this.players$.asObservable().pipe(map(this.mapPlayerTableRows.bind(this)));
  }

  /**
   * Returns players
   * @returns Players
   */
  public async getPlayers(): Promise<Player[]> {
    return await firstValueFrom(this.getPlayersObs());
  }

  /**
   * Finds player by ID
   * @returns Player
   */
  public async getPlayerById(id: number): Promise<Player | undefined> {
    return await firstValueFrom(
      this.getPlayersObs().pipe(map((players) => MatchDataService.findPlayerById(players, id)))
    );
  }

  /**
   * Checks if player by name already exists
   * @returns Player by name exist
   */
  public async doesPlayerByNameExist(newPlayerName: string): Promise<boolean> {
    return (await this.getPlayers()).some((item) => item.name.toLowerCase() === newPlayerName.toLowerCase());
  }

  /**
   * Returns matches behavior subject as observable
   * @returns Matches observable
   */
  public getMatchesObs(): Observable<Match[]> {
    return this.matches$.asObservable();
  }

  /**
   * Returns match table rows behavior subject as observable
   * @returns Match table rows observable
   */
  public getMatchTableRowsObs(): Observable<MatchTableRow[]> {
    return this.matches$.asObservable().pipe(map(this.mapMatchTableRows.bind(this)));
  }

  /**
   * Returns matches
   * @returns Matches
   */
  public async getMatches(): Promise<Match[]> {
    return await firstValueFrom(this.getMatchesObs());
  }

  /**
   * Finds match by ID
   * @returns Match
   */
  public async getMatchById(id: number): Promise<Match | undefined> {
    return await firstValueFrom(
      this.getMatchesObs().pipe(map((matches) => MatchDataService.findMatchById(matches, id)))
    );
  }

  /**
   * Adds player by emitting new data with behavior subject
   * @param addPlayerFormData Form data
   */
  public addPlayer(addPlayerFormData: AddPlayerFormData): void {
    const players = this.players$.getValue();
    players.push(FormParseService.parsePlayerDataFromForm(addPlayerFormData));
    this.players$.next([...players]);
  }

  /**
   * Adds match by emitting new data with behavior subject
   * @param addMatchFormData Form data
   */
  public addMatch(addMatchFormData: AddMatchFormData): void {
    const matches = this.matches$.getValue();
    const newMatch = FormParseService.parseMatchDataFromForm(PLAYERS, addMatchFormData);
    matches.push(newMatch);
    this.matches$.next([...matches]);
    this.updatePlayers(newMatch);
  }
}
