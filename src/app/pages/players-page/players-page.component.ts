import { Component, OnInit } from '@angular/core';
import { filter, Observable } from 'rxjs';

import { DataService } from '@core/data/data.service';
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
  selector: 'app-players-page',
  templateUrl: './players-page.component.html',
  styleUrl: './players-page.component.scss'
})
export class PlayersPageComponent implements OnInit {
  public playerTableRows$: Observable<PlayerTableRow[]> = new Observable<PlayerTableRow[]>();

  constructor(
    private dataService: DataService,
    private dialogService: DialogService,
    private snackBarService: SnackBarService
  ) {}

  ngOnInit() {
    this.playerTableRows$ = this.dataService.getPlayerTableRowsObs();
  }

  /**
   * After closed observer
   * @param addPlayerFormData Add player form data
   */
  private async onAfterClosedObserver(addPlayerFormData: AddPlayerFormData | undefined): Promise<void> {
    if (addPlayerFormData) {
      const newPlayerExists = await this.dataService.doesPlayerByNameExist(addPlayerFormData.name || '');

      if (newPlayerExists) {
        this.snackBarService.showSnackBar('Player already exists');
      } else {
        this.dataService.addPlayer(addPlayerFormData);
        this.snackBarService.showSnackBar('Player added');
      }
    }
  }

  /**
   * On add player click, opens dialog and observes when dialog is closed
   */
  public onAddPlayerClick(): void {
    const dialogRef = this.dialogService.openDialog<AddPlayerDialogComponent, AddPlayerFormData, undefined>(
      AddPlayerDialogComponent
    );

    dialogRef
      .afterClosed()
      .pipe(filter((item) => !!item))
      .subscribe({
        next: this.onAfterClosedObserver.bind(this)
      });
  }

  /**
   * Opens player overview dialog on row click, shows snackbar if no player found
   * @param event Table row click event
   */
  public async onRowClick(event: PlayerTableRow): Promise<void> {
    const player = await this.dataService.getPlayerById(event.id);
    if (player) {
      this.dialogService.openDialog(PlayerOverviewDialogComponent, player);
    } else {
      this.snackBarService.showSnackBar('Player data unavailable');
    }
  }
}
