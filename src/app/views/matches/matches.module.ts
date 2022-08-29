import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '@shared/shared.module';
import { MatchesRoutingModule } from './matches-routing.module';
import { MatchesComponent } from './matches.component';

@NgModule({
  imports: [CommonModule, SharedModule, MatchesRoutingModule],
  exports: [],
  declarations: [MatchesComponent],
  providers: []
})
export class MatchesModule {}
