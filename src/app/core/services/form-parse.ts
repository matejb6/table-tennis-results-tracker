import { Injectable } from '@angular/core';

import { MatchData } from './match-data';
import { AddPlayerFormData, AddMatchFormData, Match, Player } from '../interfaces';
import { Set } from '../types';

@Injectable({
  providedIn: 'root',
})
export class FormParse {
  /**
   * Takes player form data and parses it into player data for app usage
   * @param addPlayerFormData Add player form data
   * @returns Player data
   */
  static parsePlayerDataFromForm(addPlayerFormData: AddPlayerFormData): Player {
    return {
      id: MatchData.generateId(),
      name: addPlayerFormData.name!,
      matchesPlayed: 0,
      matchesWon: 0,
      setsWon: 0,
    };
  }

  /**
   * Takes match form data and parses it into match data for app usage
   * @param addMatchFormData Add match form data
   * @returns Match data
   */
  static parseMatchDataFromForm(players: Player[], addMatchFormData: AddMatchFormData): Match {
    const id = MatchData.generateId();
    const gamePlayers: Player[] = [
      MatchData.findPlayerByName(players, addMatchFormData.firstPlayer)!,
      MatchData.findPlayerByName(players, addMatchFormData.secondPlayer)!,
    ];
    const sets: Set[] = addMatchFormData.sets.map((item) => [
      item.firstPlayerScore!,
      item.secondPlayerScore!,
    ]);
    const score = MatchData.getMatchScore(sets);
    const winner: Player = MatchData.getMatchWinner(score, gamePlayers);
    const date = new Date(id).toUTCString();
    return { id: id, players: gamePlayers, sets: sets, score: score, winner: winner, date: date };
  }
}
