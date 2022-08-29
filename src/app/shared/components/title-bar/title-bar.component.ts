import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-title-bar',
  templateUrl: './title-bar.component.html',
  styleUrls: ['./title-bar.component.scss']
})
export class TitleBarComponent {
  @Input()
  public title: string = '';
  @Input()
  public buttonLabel: string = '';
  @Output()
  public buttonClick: EventEmitter<void> = new EventEmitter<void>();

  constructor() {}

  public onButtonClick(): void {
    this.buttonClick.emit();
  }
}
