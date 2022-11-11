import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { filter, firstValueFrom, Observable } from 'rxjs';

import { DataService } from '@core/data/data.service';
import { MatchTableRow } from '@core/models/match-table-row';
import { DialogService } from '@shared/services/dialog/dialog.service';
import { SnackBarService } from '@shared/services/snack-bar/snack-bar.service';
import {
  AddMatchDialogComponent,
  AddMatchFormData
} from '@shared/components/add-match-dialog/add-match-dialog.component';
import { MatchOverviewDialogComponent } from '@shared/components/match-overview-dialog/match-overview-dialog.component';

@Component({
  selector: 'app-matches',
  templateUrl: './matches.component.html',
  styleUrls: ['./matches.component.scss']
})
export class MatchesComponent implements OnInit {
  public $matchTableRows: Observable<MatchTableRow[]> = new Observable<MatchTableRow[]>();

  constructor(
    private dataService: DataService,
    private dialogService: DialogService,
    private snackBarService: SnackBarService
  ) {}

  ngOnInit() {
    this.$matchTableRows = this.dataService.getMatchTableRowsObs();
  }

  /**
   * After closed observer
   * @param addMatchFormData Add match form data
   */
  private onAfterClosedObserver(addMatchFormData: AddMatchFormData | undefined): void {
    this.dataService.addMatch(addMatchFormData!);
  }

  /**
   * On add match click, opens dialog and observes when dialog is closed
   */
  public async onAddMatchClick(): Promise<void> {
    const players = await firstValueFrom(this.dataService.getPlayersObs());
    const dialogRef = this.dialogService.openDialog(AddMatchDialogComponent, players) as MatDialogRef<
      AddMatchDialogComponent,
      AddMatchFormData
    >;

    dialogRef
      .afterClosed()
      .pipe(filter((item) => !!item))
      .subscribe({
        next: this.onAfterClosedObserver.bind(this)
      });
  }

  /**
   * Opens match overview dialog on row click, shows snackbar if no match found
   * @param event Table row click event
   */
  public async onRowClick(event: MatchTableRow): Promise<void> {
    const match = await this.dataService.getMatchById(event.id);
    if (match) {
      this.dialogService.openDialog(MatchOverviewDialogComponent, match);
    } else {
      this.snackBarService.showSnackBar('Match data unavailable');
    }
  }
}
