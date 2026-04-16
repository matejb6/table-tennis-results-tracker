import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-title-bar',
  standalone: true,
  imports: [MatButtonModule],
  templateUrl: './title-bar.html',
  styleUrl: './title-bar.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TitleBar {
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
