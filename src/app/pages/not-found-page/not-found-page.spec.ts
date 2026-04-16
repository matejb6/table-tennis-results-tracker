import { provideZonelessChangeDetection } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotFoundPage } from './not-found-page';
import { getMessage } from './not-found-page.query.spec';

describe('NotFoundPage', () => {
  let fixture: ComponentFixture<NotFoundPage>;
  let component: NotFoundPage;
  let nativeElem: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NotFoundPage],
      providers: [provideZonelessChangeDetection()],
    }).compileComponents();

    fixture = TestBed.createComponent(NotFoundPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
    nativeElem = fixture.nativeElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render message', () => {
    expect(getMessage(nativeElem)).toBeTruthy();
  });

  it('should have message', () => {
    expect(getMessage(nativeElem)?.innerText).toContain('URL you try to access is not available');
  });
});
