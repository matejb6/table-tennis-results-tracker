import { Component } from '@angular/core';

@Component({
  selector: 'app-not-found-page',
  templateUrl: './not-found-page.component.html',
  styleUrl: './not-found-page.component.scss'
})
export class NotFoundPageComponent {
  public readonly message: string = 'Oops, URL you try to access is not available!';
}
