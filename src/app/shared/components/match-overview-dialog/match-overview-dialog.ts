import { ChangeDetectionStrategy, Component, inject, InjectionToken } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';

import { Match } from '@app/core/interfaces';
import { MatchOverview } from '../match-overview/match-overview';

@Component({
  selector: 'app-match-overview-dialog',
  standalone: true,
  imports: [MatButtonModule, MatDialogModule, MatchOverview],
  templateUrl: './match-overview-dialog.html',
  styleUrl: './match-overview-dialog.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MatchOverviewDialog {
  match = inject(MAT_DIALOG_DATA as InjectionToken<Match>);

  get score(): string {
    return this.match.score?.join(':');
  }
}
