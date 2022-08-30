import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchOverviewModule } from './match-overview.module';
import { MatchOverviewComponent } from './match-overview.component';

describe('MatchOverviewDialogComponent', () => {
  let fixture: ComponentFixture<MatchOverviewComponent>;
  let component: MatchOverviewComponent;
  let nativeElem: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatchOverviewModule]
    }).compileComponents();

    fixture = TestBed.createComponent(MatchOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    nativeElem = fixture.nativeElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
