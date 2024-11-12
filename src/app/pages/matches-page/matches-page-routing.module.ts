import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { MatchesPageComponent } from './matches-page.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: MatchesPageComponent
      }
    ])
  ],
  exports: [RouterModule]
})
export class MatchesPageRoutingModule {}
