import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableModule } from './table.module';
import { TableComponent } from './table.component';

describe('TableComponent', () => {
  let fixture: ComponentFixture<TableComponent<any>>;
  let component: TableComponent<any>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TableModule]
    }).compileComponents();

    fixture = TestBed.createComponent(TableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
