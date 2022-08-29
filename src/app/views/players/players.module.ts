import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '@shared/shared.module';
import { PlayersRoutingModule } from './players-routing.module';
import { PlayersComponent } from './players.component';

@NgModule({
  imports: [CommonModule, SharedModule, PlayersRoutingModule],
  exports: [],
  declarations: [PlayersComponent],
  providers: []
})
export class PlayersModule {}
