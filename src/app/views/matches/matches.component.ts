import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { filter, firstValueFrom, Observable } from 'rxjs';

import { DataService } from '@core/data/data.service';
import { MatchTableRow } from '@core/models/match-table-row';
import { DialogService } from '@shared/services/dialog/dialog.service';
import {
  AddMatchDialogComponent,
  AddMatchFormData
} from '@shared/components/add-match-dialog/add-match-dialog.component';

@Component({
  selector: 'app-matches',
  templateUrl: './matches.component.html',
  styleUrls: ['./matches.component.scss']
})
export class MatchesComponent implements OnInit {
  public $matchTableRows: Observable<MatchTableRow[]> = new Observable<MatchTableRow[]>();

  constructor(private dataService: DataService, private dialogService: DialogService) {}

  ngOnInit() {
    this.$matchTableRows = this.dataService.getMatchTableRowsObs();
  }

  private onAfterClosedObserver(value: AddMatchFormData | undefined): void {
    this.dataService.addMatch(value!);
  }

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
}
