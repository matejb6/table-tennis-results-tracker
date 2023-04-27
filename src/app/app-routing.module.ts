import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { appRoutes } from './app-routes';

const routes: Routes = [
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

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
