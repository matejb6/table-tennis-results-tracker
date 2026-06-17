import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { NavigationStart, Router, RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { filter, map, Observable } from 'rxjs';

import { FirstLetterUppercase } from '../../pipes';
import { appRoutes } from '../../../app.routes';

@Component({
  selector: 'app-nav-buttons',
  standalone: true,
  imports: [MatButtonModule, RouterModule, FirstLetterUppercase],
  templateUrl: './nav-buttons.html',
  styleUrl: './nav-buttons.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavButtons {
  private router = inject(Router);

  get routes(): string[] {
    return Object.values(appRoutes);
  }
  routeChangeUrl = toSignal(this.getRouteChangeUrlObservable());

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
