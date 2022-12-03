import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { PlayersViewComponent } from './players-view.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: PlayersViewComponent
      }
    ])
  ],
  exports: [RouterModule]
})
export class PlayersViewRoutingModule {}
