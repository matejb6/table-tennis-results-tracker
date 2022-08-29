import { Component, OnInit } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { filter, map, Observable } from 'rxjs';

import { appRoutes } from 'src/app/app-routes';

@Component({
  selector: 'app-nav-buttons',
  templateUrl: './nav-buttons.component.html',
  styleUrls: ['./nav-buttons.component.scss']
})
export class NavButtonsComponent implements OnInit {
  public routes: string[] = [];
  public $routeChangeUrl: Observable<string> = new Observable<string>();

  constructor(private router: Router) {}

  ngOnInit() {
    this.routes = this.getRoutesFromObject();
    this.$routeChangeUrl = this.getRouteChangeUrlObservable();
  }

  /**
   * @returns Routes as an array of strings
   * @description Parses routes from object to an array of strings
   */
  private getRoutesFromObject(): string[] {
    return Object.values(appRoutes);
  }

  /**
   * @returns Route change observable
   * @description Modifies router events observable to observe only navigation start event and URL
   */
  private getRouteChangeUrlObservable(): Observable<string> {
    return this.router.events.pipe(
      filter((value) => value instanceof NavigationStart),
      map((value) => (value as NavigationStart).url),
      map((value) => (value === '/' ? `/${appRoutes.players}` : value))
    );
  }

  /**
   * @param route Route
   * @returns Route name
   * @description Capitalizes route for display
   */
  public getRouteName(route: string): string {
    return route.charAt(0).toUpperCase() + route.slice(1);
  }
}
