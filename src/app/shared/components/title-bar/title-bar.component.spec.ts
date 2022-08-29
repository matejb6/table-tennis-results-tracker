import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TitleBarModule } from './title-bar.module';
import { TitleBarComponent } from './title-bar.component';

describe('TitleBarComponent', () => {
  let fixture: ComponentFixture<TitleBarComponent>;
  let component: TitleBarComponent;
  let nativeElem: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TitleBarModule]
    }).compileComponents();

    fixture = TestBed.createComponent(TitleBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    nativeElem = fixture.nativeElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
