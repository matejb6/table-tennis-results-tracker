import { Component, Input } from '@angular/core';

import { Player } from '@core/models/player';

@Component({
  selector: 'app-match-overview',
  templateUrl: './match-overview.component.html',
  styleUrls: ['./match-overview.component.scss']
})
export class MatchOverviewComponent {
  @Input()
  public players: Player[] = [];
  @Input()
  public sets: [number, number][] = [];
  @Input()
  public winner: Player = { id: 0, name: '', matchesPlayed: 0, matchesWon: 0, setsWon: 0 };

  constructor() {}

  /**
   * @param player Player
   * @returns Player is winner check
   * @description Check if player is winner
   */
  public isPlayerWinner(player: Player): boolean {
    return player.id === this.winner.id;
  }

  /**
   * @param set Set
   * @returns Set game win index
   * @description Checks and returns set game win index
   */
  public getSetGameWinIndex(set: [number, number]): number {
    return set[0] > set[1] ? 0 : 1;
  }
}