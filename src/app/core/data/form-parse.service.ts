import { Injectable } from '@angular/core';

import { Match } from '@core/models/match';
import { Player } from '@core/models/player';
import { AddMatchFormData } from '@shared/components/add-match-dialog/add-match-dialog.component';
import { AddPlayerFormData } from '@shared/components/add-player-dialog/add-player-dialog.component';
import { MatchDataService } from './match-data.service';

@Injectable({
  providedIn: 'root'
})
export class FormParseService {
  /**
   * Takes player form data and parses it into player data for app usage
   * @param addPlayerFormData Add player form data
   * @returns Player data
   */
  public static parsePlayerDataFromForm(addPlayerFormData: AddPlayerFormData): Player {
    return {
      id: MatchDataService.generateId(),
      name: addPlayerFormData.name!,
      matchesPlayed: 0,
      matchesWon: 0,
      setsWon: 0
    };
  }

  /**
   * Takes match form data and parses it into match data for app usage
   * @param addMatchFormData Add match form data
   * @returns Match data
   */
  public static parseMatchDataFromForm(players: Player[], addMatchFormData: AddMatchFormData): Match {
    const id = MatchDataService.generateId();
    const playersByName: Player[] = addMatchFormData.players.map(
      (player) => MatchDataService.findPlayerByName(players, player)!
    );
    const sets: [number, number][] = addMatchFormData.sets.map((item) => [
      item.firstPlayerScore!,
      item.secondPlayerScore!
    ]);
    const score = MatchDataService.getMatchScore(sets);
    const winner: Player = MatchDataService.getMatchWinner(score, playersByName);
    const date = new Date(id).toUTCString();
    return { id: id, players: playersByName, sets: sets, score: score, winner: winner, date: date };
  }
}
