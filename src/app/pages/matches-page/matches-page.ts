import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { filter, firstValueFrom } from 'rxjs';

import { Data } from '@app/core/services';
import { AddMatchFormData, MatchTableRow, Player } from '@app/core/interfaces';
import { AddMatchDialog, MatchOverviewDialog, Table, TitleBar } from '@app/shared/components';
import { Dialog, SnackBar } from '@app/shared/services';

@Component({
  selector: 'app-matches-page',
  standalone: true,
  imports: [Table, TitleBar],
  providers: [Dialog, SnackBar],
  templateUrl: './matches-page.html',
  styleUrl: './matches-page.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MatchesPage {
  private dataService = inject(Data);
  private dialogService = inject(Dialog);
  private snackBarService = inject(SnackBar);

  matchTableRows = toSignal(this.dataService.getMatchTableRowsObs());

  /**
   * After closed observer
   * @param addMatchFormData Add match form data
   */
  private onAfterClosedObserver(addMatchFormData: AddMatchFormData | undefined): void {
    if (addMatchFormData) {
      this.dataService.addMatch(addMatchFormData);
    }
  }

  /**
   * Opens dialog for adding a match and observes when dialog is closed
   */
  async addMatch(): Promise<void> {
    const players = await firstValueFrom(this.dataService.getPlayersObs());
    const dialogRef = this.dialogService.openDialog<AddMatchDialog, AddMatchFormData, Player[]>(
      AddMatchDialog,
      players,
    );

    dialogRef
      .afterClosed()
      .pipe(filter((item) => !!item))
      .subscribe({
        next: this.onAfterClosedObserver.bind(this),
      });
  }

  /**
   * Opens match overview dialog, shows snackbar if no match found
   * @param event Table row click event
   */
  async openMatchDialog(event: MatchTableRow): Promise<void> {
    const match = await this.dataService.getMatchById(event.id);
    if (match) {
      this.dialogService.openDialog(MatchOverviewDialog, match);
    } else {
      this.snackBarService.showSnackBar('Match data unavailable');
    }
  }
}
