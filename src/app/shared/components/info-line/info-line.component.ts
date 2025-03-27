import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-info-line',
  standalone: true,
  imports: [],
  templateUrl: './info-line.component.html',
  styleUrl: './info-line.component.scss'
})
export class InfoLineComponent {
  @Input() label = '';
  @Input() value: string | number = '';
}
