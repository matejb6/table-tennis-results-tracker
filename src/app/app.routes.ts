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
    loadChildren: () => import('./pages/players-page/players-page.module').then((m) => m.PlayersPageModule)
  },
  {
    path: appRoutes.matches,
    title: 'TTRT • Matches',
    loadChildren: () => import('./pages/matches-page/matches-page.module').then((m) => m.MatchesPageModule)
  },
  {
    path: '',
    redirectTo: appRoutes.players,
    pathMatch: 'full'
  },
  {
    path: '**',
    title: 'TTRT • Not Found',
    loadChildren: () => import('./pages/not-found-page/not-found-page.module').then((m) => m.NotFoundPageModule)
  }
];
