import { provideZonelessChangeDetection } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoLine } from './info-line';
import { getLabel, getValue } from './info-line.query.spec';

describe('InfoLine', () => {
  let fixture: ComponentFixture<InfoLine>;
  let component: InfoLine;
  let nativeElem: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InfoLine],
      providers: [provideZonelessChangeDetection()],
    }).compileComponents();

    fixture = TestBed.createComponent(InfoLine);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('label', 'Label');
    fixture.componentRef.setInput('value', 3);
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
