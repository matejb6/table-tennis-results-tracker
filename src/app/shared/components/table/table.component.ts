import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent<T> implements OnInit {
  @Input()
  public dataSource: T[] = [];
  @Output()
  public rowClick: EventEmitter<T> = new EventEmitter<T>();
  public columns: string[] = [];

  constructor() {}

  ngOnInit() {
    this.initColumns();
    this.removeColumnId();
  }

  /**
   * Inits columns based on provided data source and shows no data label in header if data source is empty
   */
  private initColumns(): void {
    this.columns = this.dataSource.length ? Object.keys(this.dataSource[0]) : ['No data'];
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
   * @param row Row clicked
   * Emits row click output on row click
   */
  public onRowClick(row: T): void {
    this.rowClick.emit(row);
  }
}
