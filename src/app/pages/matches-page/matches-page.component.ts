import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { filter, firstValueFrom, Observable } from 'rxjs';

import { DataService } from '@core/data';
import { AddMatchFormData, MatchTableRow, Player } from '@core/interfaces';
import {
  AddMatchDialogComponent,
  MatchOverviewDialogComponent,
  TableComponent,
  TitleBarComponent
} from '@shared/components';
import { DialogService, SnackBarService } from '@shared/services';
import { SharedModule } from '@shared/shared.module';

@Component({
  selector: 'app-matches-page',
  standalone: true,
  imports: [CommonModule, SharedModule, TableComponent, TitleBarComponent],
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
