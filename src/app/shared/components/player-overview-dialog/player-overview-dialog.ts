import { ChangeDetectionStrategy, Component, inject, InjectionToken } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';

import { Player } from '@app/core/interfaces';
import { InfoLine } from '../info-line/info-line';

@Component({
  selector: 'app-player-overview-dialog',
  standalone: true,
  imports: [MatButtonModule, MatDialogModule, InfoLine],
  templateUrl: './player-overview-dialog.html',
  styleUrl: './player-overview-dialog.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PlayerOverviewDialog {
  player = inject(MAT_DIALOG_DATA as InjectionToken<Player>);
}
