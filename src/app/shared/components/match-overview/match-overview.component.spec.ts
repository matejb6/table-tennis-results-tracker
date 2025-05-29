import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchOverviewComponent } from './match-overview.component';

describe('MatchOverviewDialogComponent', () => {
  let fixture: ComponentFixture<MatchOverviewComponent>;
  let component: MatchOverviewComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatchOverviewComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(MatchOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
