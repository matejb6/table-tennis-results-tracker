import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { PageNotFoundViewComponent } from './page-not-found-view.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: PageNotFoundViewComponent
      }
    ])
  ],
  exports: [RouterModule]
})
export class PageNotFoundViewRoutingModule {}
