import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { PlayersPageComponent } from './players-page.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: PlayersPageComponent
      }
    ])
  ],
  exports: [RouterModule]
})
export class PlayersPageRoutingModule {}
