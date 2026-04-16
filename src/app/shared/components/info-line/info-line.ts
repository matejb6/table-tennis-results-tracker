import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'app-info-line',
  standalone: true,
  imports: [],
  templateUrl: './info-line.html',
  styleUrl: './info-line.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InfoLine {
  readonly label = input<string>('');
  readonly value = input<string | number>('');
}
