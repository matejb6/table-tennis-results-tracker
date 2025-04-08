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
  public readonly title = input<string>('');
  public readonly buttonLabel = input<string>('');
  public readonly buttonClick = output<void>();

  /**
   * Emits button click output when button clicked
   */
  public clickButton(): void {
    this.buttonClick.emit();
  }
}
