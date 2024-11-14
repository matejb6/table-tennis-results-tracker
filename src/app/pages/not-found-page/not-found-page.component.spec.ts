import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotFoundPageModule } from './not-found-page.module';
import { NotFoundPageComponent } from './not-found-page.component';

describe('NotFoundPageComponent', () => {
  let fixture: ComponentFixture<NotFoundPageComponent>;
  let component: NotFoundPageComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NotFoundPageModule]
    }).compileComponents();

    fixture = TestBed.createComponent(NotFoundPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
