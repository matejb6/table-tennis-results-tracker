import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

import { NavButtonsComponent } from './nav-buttons.component';
import { routes } from '../../../app.routes';

describe('NavButtonsComponent', () => {
  let fixture: ComponentFixture<NavButtonsComponent>;
  let component: NavButtonsComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [provideRouter(routes)]
    }).compileComponents();

    fixture = TestBed.createComponent(NavButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
