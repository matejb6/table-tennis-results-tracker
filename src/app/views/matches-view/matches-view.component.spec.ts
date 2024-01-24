import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatchesViewModule } from './matches-view.module';
import { MatchesViewComponent } from './matches-view.component';

describe('MatchesViewComponent', () => {
  let fixture: ComponentFixture<MatchesViewComponent>;
  let component: MatchesViewComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BrowserAnimationsModule, MatchesViewModule]
    }).compileComponents();

    fixture = TestBed.createComponent(MatchesViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
