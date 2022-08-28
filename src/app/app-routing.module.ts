import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { appRoutes } from './app-routes';

const routes: Routes = [
  {
    path: appRoutes.players,
    title: 'TTRT • Players',
    loadChildren: () => import('./views/players/players.module').then((m) => m.PlayersModule)
  },
  {
    path: appRoutes.matches,
    title: 'TTRT • Matches',
    loadChildren: () => import('./views/matches/matches.module').then((m) => m.MatchesModule)
  },
  {
    path: '',
    redirectTo: appRoutes.players,
    pathMatch: 'full'
  },
  {
    path: '**',
    title: 'TTRT • Page Not Found',
    loadChildren: () => import('./views/page-not-found/page-not-found.module').then((m) => m.PageNotFoundModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
