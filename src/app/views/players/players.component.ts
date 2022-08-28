import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { firstValueFrom, Observable } from 'rxjs';

import { DataService } from '@core/data/data.service';
import { Player } from '@core/models/player';
import {
  AddPlayerDialogComponent,
  AddPlayerForm
} from '@shared/components/add-player-dialog/add-player-dialog.component';
import { DialogService } from '@shared/services/dialog/dialog.service';
import { SnackBarService } from '@shared/services/snack-bar/snack-bar.service';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.scss']
})
export class PlayersComponent implements OnInit {
  public $players: Observable<Player[]> = new Observable<Player[]>();

  constructor(
    private dataService: DataService,
    private dialogService: DialogService,
    private snackBarService: SnackBarService
  ) {}

  ngOnInit(): void {
    this.$players = this.dataService.getPlayersObs();
  }

  private async getPlayers(): Promise<Player[]> {
    return await firstValueFrom(this.dataService.getPlayersObs());
  }

  private newPlayerExists(players: Player[], newPlayerName: string): boolean {
    return players.some((item) => item.name === newPlayerName);
  }

  public async onAddPlayerClick(): Promise<void> {
    const dialogRef = this.dialogService.openDialog(AddPlayerDialogComponent) as MatDialogRef<
      AddPlayerDialogComponent,
      AddPlayerForm
    >;

    const players = await this.getPlayers();
    const newPlayer = await firstValueFrom(dialogRef.afterClosed());

    const newPlayerExists = this.newPlayerExists(players, newPlayer?.name!);

    if (!newPlayerExists) {
      this.dataService.addPlayer(newPlayer?.name!);
      this.snackBarService.showSnackBar('Player added');
    } else {
      this.snackBarService.showSnackBar('Player already exists');
    }
  }
}
