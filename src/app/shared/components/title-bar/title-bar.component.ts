import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-title-bar',
  standalone: true,
  imports: [MatButtonModule],
  templateUrl: './title-bar.component.html',
  styleUrl: './title-bar.component.scss'
})
export class TitleBarComponent {
  @Input() title = '';
  @Input() buttonLabel = '';
  @Output() buttonClick: EventEmitter<void> = new EventEmitter<void>();

  /**
   * Emits button click output when button clicked
   */
  public clickButton(): void {
    this.buttonClick.emit();
  }
}
