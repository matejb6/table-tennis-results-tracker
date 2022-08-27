import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

import { SharedModule } from '@shared/shared.module';
import { PlayersRoutingModule } from './players-routing.module';
import { PlayersComponent } from './players.component';

@NgModule({
  imports: [MatButtonModule, SharedModule, PlayersRoutingModule],
  exports: [],
  declarations: [PlayersComponent],
  providers: []
})
export class PlayersModule {}
