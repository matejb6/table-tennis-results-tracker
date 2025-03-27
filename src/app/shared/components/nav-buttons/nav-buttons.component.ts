import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NavigationStart, Router, RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { filter, map, Observable } from 'rxjs';

import { FirstLetterUppercasePipe } from '../../pipes';
import { appRoutes } from '../../../app.routes';

@Component({
  selector: 'app-nav-buttons',
  standalone: true,
  imports: [CommonModule, MatButtonModule, RouterModule, FirstLetterUppercasePipe],
  templateUrl: './nav-buttons.component.html',
  styleUrl: './nav-buttons.component.scss'
})
export class NavButtonsComponent implements OnInit {
  public routes: string[] = [];
  public routeChangeUrl$: Observable<string> = new Observable<string>();

  constructor(private router: Router) {}

  ngOnInit() {
    this.routes = this.getRoutesFromObject();
    this.routeChangeUrl$ = this.getRouteChangeUrlObservable();
  }

  /**
   * Parses routes from object to an array of strings
   * @returns Routes as an array of strings
   */
  private getRoutesFromObject(): string[] {
    return Object.values(appRoutes);
  }

  /**
   * Modifies router events observable to observe only navigation start event and URL
   * @returns Route change observable
   */
  private getRouteChangeUrlObservable(): Observable<string> {
    return this.router.events.pipe(
      filter((value) => value instanceof NavigationStart),
      map((value) => (value as NavigationStart).url),
      map((value) => (value === '/' ? `/${appRoutes.players}` : value))
    );
  }
}
