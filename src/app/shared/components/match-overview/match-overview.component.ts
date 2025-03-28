import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

import { Player } from '@app/core/interfaces';
import { Set } from '@app/core/types';

@Component({
  selector: 'app-match-overview',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './match-overview.component.html',
  styleUrl: './match-overview.component.scss'
})
export class MatchOverviewComponent {
  @Input() players: Player[] = [];
  @Input() sets: Set[] = [];
  @Input() winner: Player = { id: 0, name: '', matchesPlayed: 0, matchesWon: 0, setsWon: 0 };

  /**
   * Check if player is winner
   * @param player Player
   * @returns Player is winner check
   */
  public isPlayerWinner(player: Player): boolean {
    return player.id === this.winner.id;
  }

  /**
   * Checks and returns set game win index
   * @param set Set
   * @returns Set game win index
   */
  public getSetGameWinIndex(set: Set): number {
    return set[0] > set[1] ? 0 : 1;
  }

  /**
   * Returns CSS .bold class if condition is met
   * @param isBold Condition
   * @returns CSS class
   */
  public getClassBold(isBold: boolean): string {
    return isBold ? 'bold' : '';
  }
}
