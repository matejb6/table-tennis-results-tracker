import { Injectable } from '@angular/core';

import { Match } from '@core/models/match';
import { Player } from '@core/models/player';
import { PlayerTableRow } from '@core/models/player-table-row';

@Injectable({
  providedIn: 'root'
})
export class MatchDataService {
  /**
   * @returns Generated ID
   * @description Generated unique ID as a date time stamp
   */
  public static generateId(): number {
    return new Date().getTime();
  }

  /**
   * @param sets Sets
   * @returns Match score
   * @description Calculates match score from sets
   */
  public static getMatchScore(sets: [number, number][]): [number, number] {
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

  /**
   * @param score Score
   * @param players Players
   * @returns Winner
   * @description Calculates match winner
   */
  public static getMatchWinner(score: [number, number], players: Player[]): Player {
    return score[0] > score[1] ? players[0] : players[1];
  }

  /**
   * @param players Players
   * @param name Name
   * @returns Player
   * @description Finds player by name
   */
  public static findPlayerByName(players: Player[], name: string | null): Player | undefined {
    return players.find((player) => player.name === name);
  }

  /**
   * @param players Players
   * @param id ID
   * @returns Player
   * @description Finds player by ID
   */
  public static findPlayerById(players: Player[], id: number | null): Player | undefined {
    return players.find((player) => player.id === id);
  }

  /**
   * @param matches Matches
   * @param id ID
   * @returns Player
   * @description Finds match by ID
   */
  public static findMatchById(matches: Match[], id: number | null): Match | undefined {
    return matches.find((match) => match.id === id);
  }

  /**
   * @param player Player
   * @param match Match
   * @returns Player sets won
   * @description Calculates how many sets player won in a match
   */
  public static getPlayerSetsWon(player: Player, match: Match): number {
    const playerIndex = match.players.indexOf(player);
    const opponentIndex = playerIndex === 0 ? 1 : 0;
    return match.sets
      .map((set) => (set[playerIndex] > set[opponentIndex] ? 1 : (0 as number)))
      .reduce((prev, curr) => prev + curr, 0);
  }

  /**
   * @param a Player A
   * @param b Player B
   * @returns Players by sets won comparison
   * @description Sort players compare function, sorts players by sets won from higher to lower
   */
  public static playerTableRowsBySetsWon(a: PlayerTableRow, b: PlayerTableRow): number {
    return b.setsWon - a.setsWon;
  }

  /**
   * @param match Match
   * @returns Players
   * @description Parses match players data into players data
   */
  public static getMatchPlayersData(match: Match): Player[] {
    return match.players.map((matchPlayer) => {
      return {
        id: matchPlayer.id,
        name: matchPlayer.name,
        matchesPlayed: 1,
        matchesWon: match.winner.id === matchPlayer.id ? 1 : 0,
        setsWon: MatchDataService.getPlayerSetsWon(matchPlayer, match)
      };
    });
  }
}
