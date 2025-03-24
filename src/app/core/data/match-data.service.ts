import { Injectable } from '@angular/core';

import { Match } from '@core/interfaces/match';
import { Player } from '@core/interfaces/player';
import { PlayerTableRow } from '@core/interfaces/player-table-row';
import { Set } from '@core/types/set';

@Injectable({
  providedIn: 'root'
})
export class MatchDataService {
  /**
   * Generated unique ID as a date time stamp
   * @returns Generated ID
   */
  public static generateId(): number {
    return new Date().getTime();
  }

  /**
   * Calculates match score from sets
   * @param sets Sets
   * @returns Match score
   */
  public static getMatchScore(sets: Set[]): Set {
    let scoreA = 0;
    let scoreB = 0;
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
   * Calculates match winner
   * @param score Score
   * @param players Players
   * @returns Winner
   */
  public static getMatchWinner(score: Set, players: Player[]): Player {
    return score[0] > score[1] ? players[0] : players[1];
  }

  /**
   * Finds player by name
   * @param players Players
   * @param name Name
   * @returns Player
   */
  public static findPlayerByName(players: Player[], name: string | null): Player | undefined {
    return players.find((player) => player.name === name);
  }

  /**
   * Finds player by ID
   * @param players Players
   * @param id ID
   * @returns Player
   */
  public static findPlayerById(players: Player[], id: number | null): Player | undefined {
    return players.find((player) => player.id === id);
  }

  /**
   * Finds match by ID
   * @param matches Matches
   * @param id ID
   * @returns Player
   */
  public static findMatchById(matches: Match[], id: number | null): Match | undefined {
    return matches.find((match) => match.id === id);
  }

  /**
   * Calculates how many sets player won in a match
   * @param player Player
   * @param match Match
   * @returns Player sets won
   */
  public static getPlayerSetsWon(player: Player, match: Match): number {
    const playerIndex = match.players.indexOf(player);
    const opponentIndex = playerIndex === 0 ? 1 : 0;
    return match.sets
      .map((set) => (set[playerIndex] > set[opponentIndex] ? 1 : (0 as number)))
      .reduce((prev, curr) => prev + curr, 0);
  }

  /**
   * Sort players compare function, sorts players by sets won from higher to lower
   * @param a Player A
   * @param b Player B
   * @returns Players by sets won comparison
   */
  public static playerTableRowsBySetsWon(a: PlayerTableRow, b: PlayerTableRow): number {
    return b.setsWon - a.setsWon;
  }

  /**
   * Parses match players data into players data
   * @param match Match
   * @returns Players
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
