import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { filter, firstValueFrom, Observable } from 'rxjs';

import { DataService } from '@core/data/data.service';
import { Player } from '@core/models/player';
import { PlayerTableRow } from '@core/models/player-table-row';
import {
  AddPlayerDialogComponent,
  AddPlayerFormData
} from '@shared/components/add-player-dialog/add-player-dialog.component';
import { DialogService } from '@shared/services/dialog/dialog.service';
import { SnackBarService } from '@shared/services/snack-bar/snack-bar.service';
// eslint-disable-next-line max-len
import { PlayerOverviewDialogComponent } from '@shared/components/player-overview-dialog/player-overview-dialog.component';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.scss']
})
export class PlayersComponent implements OnInit {
  public $playerTableRows: Observable<PlayerTableRow[]> = new Observable<PlayerTableRow[]>();

  constructor(
    private dataService: DataService,
    private dialogService: DialogService,
    private snackBarService: SnackBarService
  ) {}

  ngOnInit() {
    this.$playerTableRows = this.dataService.getPlayerTableRowsObs();
  }

  private async getPlayers(): Promise<Player[]> {
    return await firstValueFrom(this.dataService.getPlayersObs());
  }

  private newPlayerExists(players: Player[], newPlayerName: string): boolean {
    return players.some((item) => item.name.toLowerCase() === newPlayerName.toLowerCase());
  }

  private async onAfterClosedObserver(value: AddPlayerFormData | undefined): Promise<void> {
    const players = await this.getPlayers();
    const newPlayerExists = this.newPlayerExists(players, value?.name!);

    if (!newPlayerExists) {
      this.dataService.addPlayer(value!);
      this.snackBarService.showSnackBar('Player added');
    } else {
      this.snackBarService.showSnackBar('Player already exists');
    }
  }

  public async onAddPlayerClick(): Promise<void> {
    const dialogRef = this.dialogService.openDialog(AddPlayerDialogComponent) as MatDialogRef<
      AddPlayerDialogComponent,
      AddPlayerFormData
    >;

    dialogRef
      .afterClosed()
      .pipe(filter((item) => !!item))
      .subscribe({
        next: this.onAfterClosedObserver.bind(this)
      });
  }

  public async onRowClick(event: PlayerTableRow): Promise<void> {
    const player = await this.dataService.getPlayerById(event.id);
    if (player) {
      this.dialogService.openDialog(PlayerOverviewDialogComponent, player);
    } else {
      this.snackBarService.showSnackBar('Player data unavailable');
    }
  }
}
