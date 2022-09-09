import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';

import { SharedModule } from '@shared/shared.module';
import { NavButtonsComponent } from './nav-buttons.component';

@NgModule({
  imports: [CommonModule, MatButtonModule, RouterModule, SharedModule],
  exports: [NavButtonsComponent],
  declarations: [NavButtonsComponent],
  providers: []
})
export class NavButtonsModule {}
