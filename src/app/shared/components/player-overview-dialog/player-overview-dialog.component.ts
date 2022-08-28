import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

import { Player } from '@core/models/player';

@Component({
  selector: 'app-player-overview-dialog',
  templateUrl: './player-overview-dialog.component.html',
  styleUrls: ['./player-overview-dialog.component.scss']
})
export class PlayerOverviewDialogComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public player: Player) {}
}
