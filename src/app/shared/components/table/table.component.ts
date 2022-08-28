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
  }

  private initColumns(): void {
    this.columns = this.dataSource.length ? Object.keys(this.dataSource[0]) : ['No data'];
  }

  public onRowClick(row: T): void {
    this.rowClick.emit(row);
  }
}
