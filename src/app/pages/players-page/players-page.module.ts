import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '@shared/shared.module';
import { PlayersPageRoutingModule } from './players-page-routing.module';
import { PlayersPageComponent } from './players-page.component';

@NgModule({
  imports: [CommonModule, SharedModule, PlayersPageRoutingModule],
  exports: [],
  declarations: [PlayersPageComponent],
  providers: []
})
export class PlayersPageModule {}
