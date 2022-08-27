import { NgModule } from '@angular/core';

import { MatchesRoutingModule } from './matches-routing.module';
import { MatchesComponent } from './matches.component';

@NgModule({
  imports: [MatchesRoutingModule],
  exports: [],
  declarations: [MatchesComponent],
  providers: []
})
export class MatchesModule {}
