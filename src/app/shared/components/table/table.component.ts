import { Component, Input, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent<T> implements OnInit, OnChanges {
  private readonly positionKey: string = 'position';
  @Input()
  public dataSource: T[] = [];
  public columns: string[] = [];

  constructor() {}

  ngOnInit() {
    this.initColumns();
    this.addPositionColumn();
    this.addPositionToDataSource();
  }

  ngOnChanges() {
    this.addPositionColumn();
    this.addPositionToDataSource();
  }

  private initColumns(): void {
    this.columns = this.dataSource.length ? Object.keys(this.dataSource[0]) : [];
  }

  private addPositionColumn(): void {
    !this.columns.includes(this.positionKey) && this.columns.unshift(this.positionKey);
  }

  private addPositionToDataSource(): void {
    this.dataSource.forEach((item, index) => {
      Object.defineProperty(item, this.positionKey, {
        value: index + 1
      });
    });
  }
}
