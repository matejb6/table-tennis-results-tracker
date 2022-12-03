import { Component } from '@angular/core';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found-view.component.html',
  styleUrls: ['./page-not-found-view.component.scss']
})
export class PageNotFoundViewComponent {
  public readonly message: string = 'Oops, URL you try to access is not available!';
}
