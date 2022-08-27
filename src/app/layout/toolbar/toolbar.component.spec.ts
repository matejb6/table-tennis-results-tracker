import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { ToolbarModule } from './toolbar.module';
import { ToolbarComponent } from './toolbar.component';
import { ToolbarComponentQuery } from './toolbar.component.query.spec';

describe('ToolbarComponent', () => {
  let fixture: ComponentFixture<ToolbarComponent>;
  let component: ToolbarComponent;
  let nativeElem: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ToolbarModule, RouterTestingModule]
    }).compileComponents();

    fixture = TestBed.createComponent(ToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    nativeElem = fixture.nativeElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render toolbar', () => {
    expect(ToolbarComponentQuery.getToolbar(nativeElem)).toBeTruthy();
  });

  it('should render toolbar icon', () => {
    expect(ToolbarComponentQuery.getToolbarIcon(nativeElem)).toBeTruthy();
  });

  it('should render toolbar title', () => {
    expect(ToolbarComponentQuery.getToolbarTitle(nativeElem)).toBeTruthy();
  });

  it('should have toolbar title', () => {
    expect(ToolbarComponentQuery.getToolbarTitle(nativeElem)?.innerText).toContain('Table Tennis Results Tracker');
  });
});
