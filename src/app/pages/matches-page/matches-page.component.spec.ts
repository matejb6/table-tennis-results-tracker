import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatchesPageModule } from './matches-page.module';
import { MatchesPageComponent } from './matches-page.component';

describe('MatchesPageComponent', () => {
  let fixture: ComponentFixture<MatchesPageComponent>;
  let component: MatchesPageComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BrowserAnimationsModule, MatchesPageModule]
    }).compileComponents();

    fixture = TestBed.createComponent(MatchesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
