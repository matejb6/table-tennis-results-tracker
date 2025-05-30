import { Component, inject, InjectionToken } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';

import { Match } from '@app/core/interfaces';
import { MatchOverviewComponent } from '../match-overview/match-overview.component';

@Component({
  selector: 'app-match-overview-dialog',
  standalone: true,
  imports: [MatButtonModule, MatDialogModule, MatchOverviewComponent],
  templateUrl: './match-overview-dialog.component.html',
  styleUrl: './match-overview-dialog.component.scss'
})
export class MatchOverviewDialogComponent {
  public match = inject(MAT_DIALOG_DATA as InjectionToken<Match>);

  public get score(): string {
    return this.match.score?.join(':');
  }
}
