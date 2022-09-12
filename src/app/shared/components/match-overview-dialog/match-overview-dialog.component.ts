import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

import { Match } from '@core/models/match';

@Component({
  selector: 'app-match-overview-dialog',
  templateUrl: './match-overview-dialog.component.html',
  styleUrls: ['./match-overview-dialog.component.scss']
})
export class MatchOverviewDialogComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public match: Match) {}

  /**
   * @returns Players
   * @description Joins player names
   */
  public getPlayers(): string {
    return this.match.players?.map((player) => player.name).join(' vs. ');
  }

  /**
   * @returns Sets
   * @description Joins sets
   */
  public getSets(): string {
    return this.match.sets?.map((set) => set.join(':')).join(' ');
  }

  /**
   * @returns Score
   * @description Joins score
   */
  public getScore(): string {
    return this.match.score?.join(':');
  }
}
