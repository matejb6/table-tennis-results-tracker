import { Component, OnInit } from '@angular/core';
import { filter, firstValueFrom, Observable } from 'rxjs';

import { DataService } from '@core/data/data.service';
import { AddMatchFormData } from '@core/interfaces/add-match-form-data';
import { MatchTableRow } from '@core/interfaces/match-table-row';
import { Player } from '@core/interfaces/player';
import { DialogService } from '@shared/services/dialog/dialog.service';
import { SnackBarService } from '@shared/services/snack-bar/snack-bar.service';
import { AddMatchDialogComponent } from '@shared/components/add-match-dialog/add-match-dialog.component';
import { MatchOverviewDialogComponent } from '@shared/components/match-overview-dialog/match-overview-dialog.component';

@Component({
  selector: 'app-matches-page',
  templateUrl: './matches-page.component.html',
  styleUrl: './matches-page.component.scss'
})
export class MatchesPageComponent implements OnInit {
  public matchTableRows$: Observable<MatchTableRow[]> = new Observable<MatchTableRow[]>();

  constructor(
    private dataService: DataService,
    private dialogService: DialogService,
    private snackBarService: SnackBarService
  ) {}

  ngOnInit() {
    this.matchTableRows$ = this.dataService.getMatchTableRowsObs();
  }

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
  public async addMatch(): Promise<void> {
    const players = await firstValueFrom(this.dataService.getPlayersObs());
    const dialogRef = this.dialogService.openDialog<AddMatchDialogComponent, AddMatchFormData, Player[]>(
      AddMatchDialogComponent,
      players
    );

    dialogRef
      .afterClosed()
      .pipe(filter((item) => !!item))
      .subscribe({
        next: this.onAfterClosedObserver.bind(this)
      });
  }

  /**
   * Opens match overview dialog when row clicked, shows snackbar if no match found
   * @param event Table row click event
   */
  public async clickRow(event: MatchTableRow): Promise<void> {
    const match = await this.dataService.getMatchById(event.id);
    if (match) {
      this.dialogService.openDialog(MatchOverviewDialogComponent, match);
    } else {
      this.snackBarService.showSnackBar('Match data unavailable');
    }
  }
}
