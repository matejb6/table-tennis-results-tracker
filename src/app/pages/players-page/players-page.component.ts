import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { filter, Observable } from 'rxjs';

import { DataService } from '@app/core/services';
import { AddPlayerFormData, PlayerTableRow } from '@app/core/interfaces';
import {
  AddPlayerDialogComponent,
  PlayerOverviewDialogComponent,
  TableComponent,
  TitleBarComponent
} from '@app/shared/components';
import { DialogService, SnackBarService } from '@app/shared/services';
import { SharedModule } from '@app/shared/shared.module';

@Component({
  selector: 'app-players-page',
  standalone: true,
  imports: [CommonModule, SharedModule, TableComponent, TitleBarComponent],
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
   * Opens dialog for adding a player and observes when dialog is closed
   */
  public addPlayer(): void {
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
   * Opens player overview dialog when row clicked, shows snackbar if no player found
   * @param event Table row click event
   */
  public async clickRow(event: PlayerTableRow): Promise<void> {
    const player = await this.dataService.getPlayerById(event.id);
    if (player) {
      this.dialogService.openDialog(PlayerOverviewDialogComponent, player);
    } else {
      this.snackBarService.showSnackBar('Player data unavailable');
    }
  }
}
