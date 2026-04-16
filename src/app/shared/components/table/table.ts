import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, input, OnInit, output } from '@angular/core';
import { MatTableModule } from '@angular/material/table';

import { CamelCaseSplit, FirstLetterUppercase } from '../../pipes';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [CommonModule, MatTableModule, CamelCaseSplit, FirstLetterUppercase],
  templateUrl: './table.html',
  styleUrl: './table.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Table<T> implements OnInit {
  readonly dataSource = input<T[]>([]);
  readonly rowClick = output<T>();
  columns: string[] = [];

  ngOnInit() {
    this.initColumns();
    this.removeColumnId();
  }

  /**
   * Inits columns based on provided data source and shows no data label in header if data source is empty
   */
  private initColumns(): void {
    this.columns = this.dataSource().length
      ? Object.keys(this.dataSource()[0] as object)
      : ['No data'];
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
  clickRow(row: T): void {
    this.rowClick.emit(row);
  }
}
