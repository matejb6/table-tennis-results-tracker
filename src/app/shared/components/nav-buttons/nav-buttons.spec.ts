import { provideZonelessChangeDetection } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

import { NavButtons } from './nav-buttons';
import { routes } from '../../../app.routes';

describe('NavButtons', () => {
  let fixture: ComponentFixture<NavButtons>;
  let component: NavButtons;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [provideZonelessChangeDetection(), provideRouter(routes)],
    }).compileComponents();

    fixture = TestBed.createComponent(NavButtons);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
