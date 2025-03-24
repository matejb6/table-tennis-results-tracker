import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TitleBarComponent } from './title-bar.component';

describe('TitleBarComponent', () => {
  let fixture: ComponentFixture<TitleBarComponent>;
  let component: TitleBarComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TitleBarComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(TitleBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
