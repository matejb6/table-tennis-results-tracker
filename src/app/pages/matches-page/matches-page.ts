import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { filter } from 'rxjs';

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

  matchTableRows = signal<MatchTableRow[]>(this.mapMatchTableRows());

  /**
   * Maps matches data into match table rows data
   * @param matches Matches
   * @returns Matches table row
   */
  private mapMatchTableRows(): MatchTableRow[] {
    return this.dataService.getMatches().map((match) => ({
      id: match.id,
      players: match.players.map((player) => player.name).join(' vs. '),
      score: `${match.score[0]}:${match.score[1]}`,
      winner: match.winner.name,
    }));
  }

  /**
   * After closed observer
   * @param addMatchFormData Add match form data
   */
  private onAfterClosedObserver(addMatchFormData: AddMatchFormData | undefined): void {
    if (addMatchFormData) {
      this.dataService.addMatch(addMatchFormData);
      this.matchTableRows.set(this.mapMatchTableRows());
      this.snackBarService.showSnackBar('Match added');
    }
  }

  /**
   * Opens dialog for adding a match and observes when dialog is closed
   */
  async addMatch(): Promise<void> {
    const dialogRef = this.dialogService.openDialog<AddMatchDialog, AddMatchFormData, Player[]>(
      AddMatchDialog,
      this.dataService.getPlayers(),
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
  openMatchOverview(event: MatchTableRow): void {
    const match = this.dataService.getMatchById(event.id);
    if (match) {
      this.dialogService.openDialog(MatchOverviewDialog, match);
    } else {
      this.snackBarService.showSnackBar('Match data unavailable');
    }
  }
}
