import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Observable } from 'rxjs';

import { DataService } from '@core/data/data.service';
import { Player } from '@core/models/player';
import {
  AddPlayerDialogComponent,
  AddPlayerForm
} from '@shared/components/add-player-dialog/add-player-dialog.component';
import { DialogService } from '@shared/services/dialog/dialog.service';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.scss']
})
export class PlayersComponent implements OnInit {
  public $players: Observable<Player[]> = new Observable<Player[]>();

  constructor(private dataService: DataService, private dialogService: DialogService) {}

  ngOnInit(): void {
    this.initTable();
  }

  private initTable(): void {
    this.$players = this.dataService.getPlayersObs();
  }

  public onAddPlayerClick(): void {
    const dialogRef = this.dialogService.openDialog(AddPlayerDialogComponent) as MatDialogRef<
      AddPlayerDialogComponent,
      AddPlayerForm
    >;

    dialogRef.afterClosed().subscribe({
      next: (value) => {
        value && this.dataService.addPlayer(value?.name);
      }
    });
  }
}
