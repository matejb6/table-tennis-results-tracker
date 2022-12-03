import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '@shared/shared.module';
import { PlayersViewRoutingModule } from './players-view-routing.module';
import { PlayersViewComponent } from './players-view.component';

@NgModule({
  imports: [CommonModule, SharedModule, PlayersViewRoutingModule],
  exports: [],
  declarations: [PlayersViewComponent],
  providers: []
})
export class PlayersViewModule {}
