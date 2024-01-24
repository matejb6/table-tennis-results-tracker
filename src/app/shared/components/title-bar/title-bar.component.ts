import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-title-bar',
  templateUrl: './title-bar.component.html',
  styleUrls: ['./title-bar.component.scss']
})
export class TitleBarComponent {
  @Input()
  public title = '';
  @Input()
  public buttonLabel = '';
  @Output()
  public buttonClick: EventEmitter<void> = new EventEmitter<void>();

  /**
   * Emits button click output on button click
   */
  public onButtonClick(): void {
    this.buttonClick.emit();
  }
}
