import { NgModule } from '@angular/core';

import { PlayersRoutingModule } from './players-routing.module';
import { PlayersComponent } from './players.component';

@NgModule({
  imports: [PlayersRoutingModule],
  exports: [],
  declarations: [PlayersComponent],
  providers: []
})
export class PlayersModule {}
