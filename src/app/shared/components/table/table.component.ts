import { CommonModule } from '@angular/common';
import { Component, Input, OnInit, output } from '@angular/core';
import { MatTableModule } from '@angular/material/table';

import { CamelCaseSplitPipe, FirstLetterUppercasePipe } from '../../pipes';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [CommonModule, MatTableModule, CamelCaseSplitPipe, FirstLetterUppercasePipe],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss'
})
export class TableComponent<T> implements OnInit {
  // TODO Migrate input to signal input and resolve table rows rendering issue
  @Input() dataSource: T[] = [];
  public readonly rowClick = output<T>();
  public columns: string[] = [];

  ngOnInit() {
    this.initColumns();
    this.removeColumnId();
  }

  /**
   * Inits columns based on provided data source and shows no data label in header if data source is empty
   */
  private initColumns(): void {
    this.columns = this.dataSource.length ? Object.keys(this.dataSource[0] as object) : ['No data'];
  }

  /**
   * Removes ID column from table if table data exists
   */
  private removeColumnId(): void {
    if (this.columns.length && this.columns[0] !== 'No data') {
      const indexOfId = this.columns.indexOf('id');
      this.columns.splice(indexOfId, 1);
    }
  }

  /**
   * Emits row click output when row clicked
   * @param row Row clicked
   */
  public clickRow(row: T): void {
    this.rowClick.emit(row);
  }
}
