import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { MatchesComponent } from './matches.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: MatchesComponent
      }
    ])
  ],
  exports: [RouterModule]
})
export class MatchesRoutingModule {}
