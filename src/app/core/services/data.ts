import { Injectable, signal } from '@angular/core';

import { MATCHES, PLAYERS } from '@data/initial-data';
import { AddPlayerFormData, AddMatchFormData, Player, Match } from '../interfaces';
import { getPlayerById, getPlayersFromMatch, parseMatchForm, parsePlayerForm } from '../utils';

@Injectable({
  providedIn: 'root',
})
export class Data {
  players = signal<Player[]>(PLAYERS);
  matches = signal<Match[]>(MATCHES);

  /**
   * Update players with last match, creates new match players data which are added to existing players
   * @param match Match
   */
  private updatePlayersAfterMatch(match: Match): void {
    const lastMatchPlayers: Player[] = getPlayersFromMatch(match);

    this.players.update((players) => {
      const updatedPlayers: Player[] = [];
      players.forEach((player) => {
        const matchPlayer = getPlayerById(lastMatchPlayers, player.id);
        if (matchPlayer) {
          player.matchesPlayed += matchPlayer.matchesPlayed;
          player.matchesWon += matchPlayer.matchesWon;
          player.setsWon += matchPlayer.setsWon;
        }
        updatedPlayers.push(player);
      });
      return updatedPlayers;
    });
  }

  /**
   * Finds player by ID
   * @returns Player
   */
  getPlayerById(id: number): Player | undefined {
    return this.players().find((player) => player.id === id);
  }

  /**
   * Finds match by ID
   * @returns Match
   */
  getMatchById(id: number): Match | undefined {
    return this.matches().find((match) => match.id === id);
  }

  /**
   * Adds player by emitting new data with behavior subject
   * @param addPlayerFormData Form data
   */
  addPlayer(addPlayerFormData: AddPlayerFormData): void {
    const newPlayer = parsePlayerForm(addPlayerFormData);
    this.players.update((value) => [...value, newPlayer]);
  }

  /**
   * Adds match by emitting new data with behavior subject
   * @param addMatchFormData Form data
   */
  addMatch(addMatchFormData: AddMatchFormData): void {
    const newMatch = parseMatchForm(this.players(), addMatchFormData);
    this.matches.update((value) => [...value, newMatch]);
    this.updatePlayersAfterMatch(newMatch);
  }

  /**
   * Checks if player by name already exists
   * @returns Player by name exist
   */
  doesPlayerByNameExist(newPlayerName: string): boolean {
    return this.players().some((item) => item.name.toLowerCase() === newPlayerName.toLowerCase());
  }
}
