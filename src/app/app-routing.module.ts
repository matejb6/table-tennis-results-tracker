import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'players',
    title: 'Table Tennis Results Tracker • Players',
    loadChildren: () => import('./views/players/players.module').then((m) => m.PlayersModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
