import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

import { Match } from '@core/models/match';

@Component({
  selector: 'app-match-overview-dialog',
  templateUrl: './match-overview-dialog.component.html',
  styleUrl: './match-overview-dialog.component.scss'
})
export class MatchOverviewDialogComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public match: Match) {}

  /**
   * Joins player names
   * @returns Players
   */
  public getPlayers(): string {
    return this.match.players?.map((player) => player.name).join(' vs. ');
  }

  /**
   * Joins sets
   * @returns Sets
   */
  public getSets(): string {
    return this.match.sets?.map((set) => set.join(':')).join(' ');
  }

  /**
   * Joins score
   * @returns Score
   */
  public getScore(): string {
    return this.match.score?.join(':');
  }
}
