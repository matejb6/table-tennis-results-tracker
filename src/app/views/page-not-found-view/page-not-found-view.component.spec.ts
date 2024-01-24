import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageNotFoundViewModule } from './page-not-found-view.module';
import { PageNotFoundViewComponent } from './page-not-found-view.component';

describe('PageNotFoundViewComponent', () => {
  let fixture: ComponentFixture<PageNotFoundViewComponent>;
  let component: PageNotFoundViewComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageNotFoundViewModule]
    }).compileComponents();

    fixture = TestBed.createComponent(PageNotFoundViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
