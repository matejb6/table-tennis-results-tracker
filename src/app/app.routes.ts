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
    loadChildren: () => import('./views/players-view/players-view.module').then((m) => m.PlayersViewModule)
  },
  {
    path: appRoutes.matches,
    title: 'TTRT • Matches',
    loadChildren: () => import('./views/matches-view/matches-view.module').then((m) => m.MatchesViewModule)
  },
  {
    path: '',
    redirectTo: appRoutes.players,
    pathMatch: 'full'
  },
  {
    path: '**',
    title: 'TTRT • Page Not Found',
    loadChildren: () =>
      import('./views/page-not-found-view/page-not-found-view.module').then((m) => m.PageNotFoundViewModule)
  }
];
