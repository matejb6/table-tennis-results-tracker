import { Component, input, output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-title-bar',
  standalone: true,
  imports: [MatButtonModule],
  templateUrl: './title-bar.component.html',
  styleUrl: './title-bar.component.scss'
})
export class TitleBarComponent {
  readonly title = input<string>('');
  readonly buttonLabel = input<string>('');
  readonly buttonClick = output<void>();

  /**
   * Emits button click output when button clicked
   */
  clickButton(): void {
    this.buttonClick.emit();
  }
}
