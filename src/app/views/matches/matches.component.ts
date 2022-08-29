import { Component } from '@angular/core';
import { firstValueFrom } from 'rxjs';

import { DataService } from '@core/data/data.service';
import { DialogService } from '@shared/services/dialog/dialog.service';
import { AddMatchDialogComponent } from '@shared/components/add-match-dialog/add-match-dialog.component';

@Component({
  selector: 'app-matches',
  templateUrl: './matches.component.html',
  styleUrls: ['./matches.component.scss']
})
export class MatchesComponent {
  constructor(private dataService: DataService, private dialogService: DialogService) {}

  public async onAddMatchClick(): Promise<void> {
    const players = await firstValueFrom(this.dataService.getPlayersObs());
    this.dialogService.openDialog(AddMatchDialogComponent, players);
  }
}
