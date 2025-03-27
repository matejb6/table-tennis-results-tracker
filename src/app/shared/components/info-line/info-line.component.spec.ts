import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoLineComponent } from './info-line.component';
import { getLabel, getValue } from './info-line.component.query.spec';

describe('InfoLineComponent', () => {
  let fixture: ComponentFixture<InfoLineComponent>;
  let component: InfoLineComponent;
  let nativeElem: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InfoLineComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(InfoLineComponent);
    component = fixture.componentInstance;
    component.label = 'Label';
    component.value = 3;
    fixture.detectChanges();
    nativeElem = fixture.nativeElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render label as bold', () => {
    expect(getLabel(nativeElem)?.innerHTML).toContain('strong');
  });

  it('should render label', () => {
    expect(getLabel(nativeElem)?.innerText).toContain('Label');
  });

  it('should render value', () => {
    expect(getValue(nativeElem)?.innerText).toContain(3);
  });
});
