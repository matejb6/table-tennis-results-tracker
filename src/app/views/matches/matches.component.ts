import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { filter, firstValueFrom, Observable } from 'rxjs';

import { DataService } from '@core/data/data.service';
import { Match } from '@core/models/match';
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
  public $matchesTableRow: Observable<MatchTableRow[]> = new Observable<MatchTableRow[]>();

  constructor(private dataService: DataService, private dialogService: DialogService) {}

  ngOnInit() {
    this.$matchesTableRow = this.dataService.getMatchesTableRowObs();
  }

  private onAfterClosedObserver(value: AddMatchFormData | undefined): void {
    this.dataService.addMatch(value as Match);
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
