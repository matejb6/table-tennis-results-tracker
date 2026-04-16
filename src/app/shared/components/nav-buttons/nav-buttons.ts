import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { NavigationStart, Router, RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { filter, map, Observable } from 'rxjs';

import { FirstLetterUppercase } from '../../pipes';
import { appRoutes } from '../../../app.routes';

@Component({
  selector: 'app-nav-buttons',
  standalone: true,
  imports: [CommonModule, MatButtonModule, RouterModule, FirstLetterUppercase],
  templateUrl: './nav-buttons.html',
  styleUrl: './nav-buttons.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavButtons implements OnInit {
  private router = inject(Router);

  get routes(): string[] {
    return Object.values(appRoutes);
  }
  routeChangeUrl$: Observable<string> = new Observable<string>();

  ngOnInit() {
    this.initRouteChangeUrlObservable();
  }

  /**
   * Initializes route change URL observable
   */
  private initRouteChangeUrlObservable(): void {
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
      map((value) => (value === '/' ? `/${appRoutes.players}` : value)),
    );
  }
}
