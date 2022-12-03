import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { MatchesViewComponent } from './matches-view.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: MatchesViewComponent
      }
    ])
  ],
  exports: [RouterModule]
})
export class MatchesViewRoutingModule {}
