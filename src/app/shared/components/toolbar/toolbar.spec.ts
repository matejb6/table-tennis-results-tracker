import { provideZonelessChangeDetection } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

import { Toolbar } from './toolbar';
import { getToolbar, getToolbarIcon, getToolbarTitle } from './toolbar.query.spec';
import { routes } from '../../../app.routes';

describe('Toolbar', () => {
  let fixture: ComponentFixture<Toolbar>;
  let component: Toolbar;
  let nativeElem: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Toolbar],
      providers: [provideZonelessChangeDetection(), provideRouter(routes)],
    }).compileComponents();

    fixture = TestBed.createComponent(Toolbar);
    component = fixture.componentInstance;
    fixture.detectChanges();
    nativeElem = fixture.nativeElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render toolbar', () => {
    expect(getToolbar(nativeElem)).toBeTruthy();
  });

  it('should render toolbar icon', () => {
    expect(getToolbarIcon(nativeElem)).toBeTruthy();
  });

  it('should render toolbar title', () => {
    expect(getToolbarTitle(nativeElem)).toBeTruthy();
  });

  it('should have toolbar title', () => {
    expect(getToolbarTitle(nativeElem)?.innerText).toContain('Table Tennis Results Tracker');
  });
});
