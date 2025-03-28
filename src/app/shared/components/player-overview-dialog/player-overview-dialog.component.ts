import { Component, Inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';

import { Player } from '@app/core/interfaces';
import { InfoLineComponent } from '../info-line/info-line.component';

@Component({
  selector: 'app-player-overview-dialog',
  standalone: true,
  imports: [MatButtonModule, MatDialogModule, InfoLineComponent],
  templateUrl: './player-overview-dialog.component.html',
  styleUrl: './player-overview-dialog.component.scss'
})
export class PlayerOverviewDialogComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public player: Player) {}
}
