import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
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
  private router = inject(Router);

  public get routes(): string[] {
    return Object.values(appRoutes);
  }
  public routeChangeUrl$: Observable<string> = new Observable<string>();

  ngOnInit() {
    this.routeChangeUrl$ = this.getRouteChangeUrlObservable();
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
