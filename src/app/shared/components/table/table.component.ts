import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent<T> implements OnInit {
  private readonly positionKey: string = 'pos';
  @Input()
  public displayedColumns: string[] = [];
  @Input()
  public dataSource: T[] = [];

  constructor() {}

  ngOnInit() {
    this.addPositionColumn();
    this.addPositionToDataSource();
  }

  private addPositionColumn(): void {
    this.displayedColumns.unshift(this.positionKey);
  }

  private addPositionToDataSource(): void {
    this.dataSource.forEach((item, index) => {
      Object.defineProperty(item, this.positionKey, {
        value: index + 1
      });
    });
  }
}
