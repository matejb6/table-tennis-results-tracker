import { Component, input } from '@angular/core';

@Component({
  selector: 'app-info-line',
  standalone: true,
  imports: [],
  templateUrl: './info-line.component.html',
  styleUrl: './info-line.component.scss'
})
export class InfoLineComponent {
  readonly label = input<string>('');
  readonly value = input<string | number>('');
}
