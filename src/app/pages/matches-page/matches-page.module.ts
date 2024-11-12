import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '@shared/shared.module';
import { MatchesPageRoutingModule } from './matches-page-routing.module';
import { MatchesPageComponent } from './matches-page.component';

@NgModule({
  imports: [CommonModule, SharedModule, MatchesPageRoutingModule],
  exports: [],
  declarations: [MatchesPageComponent],
  providers: []
})
export class MatchesPageModule {}
