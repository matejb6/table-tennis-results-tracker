import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NotFoundPageModule } from './not-found-page.module';
import { NotFoundPageComponent } from './not-found-page.component';
import { getMessage } from './not-found-page.component.query.spec';

describe('NotFoundPageComponent', () => {
  let fixture: ComponentFixture<NotFoundPageComponent>;
  let component: NotFoundPageComponent;
  let nativeElem: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BrowserAnimationsModule, NotFoundPageModule]
    }).compileComponents();

    fixture = TestBed.createComponent(NotFoundPageComponent);
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
