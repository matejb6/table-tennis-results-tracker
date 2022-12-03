import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '@shared/shared.module';
import { MatchesViewRoutingModule } from './matches-view-routing.module';
import { MatchesViewComponent } from './matches-view.component';

@NgModule({
  imports: [CommonModule, SharedModule, MatchesViewRoutingModule],
  exports: [],
  declarations: [MatchesViewComponent],
  providers: []
})
export class MatchesViewModule {}
