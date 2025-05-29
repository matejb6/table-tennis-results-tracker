import { Routes } from '@angular/router';

export const appRoutes: AppRoutes = {
  players: 'players',
  matches: 'matches'
};

export interface AppRoutes {
  players: string;
  matches: string;
}

export const routes: Routes = [
  {
    path: appRoutes.players,
    title: 'TTRT • Players',
    loadComponent: () => import('./pages/players-page/players-page.component').then((c) => c.PlayersPageComponent)
  },
  {
    path: appRoutes.matches,
    title: 'TTRT • Matches',
    loadComponent: () => import('./pages/matches-page/matches-page.component').then((c) => c.MatchesPageComponent)
  },
  {
    path: '',
    redirectTo: appRoutes.players,
    pathMatch: 'full'
  },
  {
    path: '**',
    title: 'TTRT • Not Found',
    loadComponent: () => import('./pages/not-found-page/not-found-page.component').then((c) => c.NotFoundPageComponent)
  }
];
