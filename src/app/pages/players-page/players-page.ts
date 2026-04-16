import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { filter, Observable } from 'rxjs';

import { Data } from '@app/core/services';
import { AddPlayerFormData, PlayerTableRow } from '@app/core/interfaces';
import { AddPlayerDialog, PlayerOverviewDialog, Table, TitleBar } from '@app/shared/components';
import { Dialog, SnackBar } from '@app/shared/services';

@Component({
  selector: 'app-players-page',
  standalone: true,
  imports: [CommonModule, Table, TitleBar],
  providers: [Dialog, SnackBar],
  templateUrl: './players-page.html',
  styleUrl: './players-page.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PlayersPage implements OnInit {
  private dataService = inject(Data);
  private dialogService = inject(Dialog);
  private snackBarService = inject(SnackBar);

  playerTableRows$: Observable<PlayerTableRow[]> = new Observable<PlayerTableRow[]>();

  ngOnInit() {
    this.initPlayerTableRowsObservable();
  }

  /**
   * Initializes player table rows observable
   */
  private initPlayerTableRowsObservable(): void {
    this.playerTableRows$ = this.dataService.getPlayerTableRowsObs();
  }

  /**
   * After closed observer
   * @param addPlayerFormData Add player form data
   */
  private async onAfterClosedObserver(
    addPlayerFormData: AddPlayerFormData | undefined,
  ): Promise<void> {
    if (addPlayerFormData) {
      const newPlayerExists = await this.dataService.doesPlayerByNameExist(
        addPlayerFormData.name || '',
      );

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
  addPlayer(): void {
    const dialogRef = this.dialogService.openDialog<AddPlayerDialog, AddPlayerFormData, undefined>(
      AddPlayerDialog,
    );

    dialogRef
      .afterClosed()
      .pipe(filter((item) => !!item))
      .subscribe({
        next: this.onAfterClosedObserver.bind(this),
      });
  }

  /**
   * Opens player overview dialog, shows snackbar if no player found
   * @param event Table row click event
   */
  async openPlayerDialog(event: PlayerTableRow): Promise<void> {
    const player = await this.dataService.getPlayerById(event.id);
    if (player) {
      this.dialogService.openDialog(PlayerOverviewDialog, player);
    } else {
      this.snackBarService.showSnackBar('Player data unavailable');
    }
  }
}
