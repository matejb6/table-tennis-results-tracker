import { Component, Inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';

import { Match } from '@core/interfaces';
import { MatchOverviewComponent } from '../match-overview/match-overview.component';

@Component({
  selector: 'app-match-overview-dialog',
  standalone: true,
  imports: [MatButtonModule, MatDialogModule, MatchOverviewComponent],
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
