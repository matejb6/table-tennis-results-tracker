import { NgModule } from '@angular/core';

import { PageNotFoundViewRoutingModule } from './page-not-found-view-routing.module';
import { PageNotFoundViewComponent } from './page-not-found-view.component';

@NgModule({
  imports: [PageNotFoundViewRoutingModule],
  exports: [],
  declarations: [PageNotFoundViewComponent],
  providers: []
})
export class PageNotFoundViewModule {}
