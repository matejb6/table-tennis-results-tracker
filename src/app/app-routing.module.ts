import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { appRoutes } from './app-routes';

const routes: Routes = [
  {
    path: appRoutes.players,
    title: 'Table Tennis Results Tracker • Players',
    loadChildren: () => import('./views/players/players.module').then((m) => m.PlayersModule)
  },
  {
    path: '',
    redirectTo: appRoutes.players,
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
