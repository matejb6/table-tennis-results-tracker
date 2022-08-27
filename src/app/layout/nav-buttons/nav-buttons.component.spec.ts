import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { NavButtonsComponent } from './nav-buttons.component';

describe('NavButtonsComponent', () => {
  let fixture: ComponentFixture<NavButtonsComponent>;
  let component: NavButtonsComponent;
  let nativeElem: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule]
    }).compileComponents();

    fixture = TestBed.createComponent(NavButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    nativeElem = fixture.nativeElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
