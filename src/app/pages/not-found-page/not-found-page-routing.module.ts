import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { NotFoundPageComponent } from './not-found-page.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: NotFoundPageComponent
      }
    ])
  ],
  exports: [RouterModule]
})
export class NotFoundPageRoutingModule {}
