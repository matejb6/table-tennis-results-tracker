import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';

import { NavButtonsComponent } from './nav-buttons.component';

@NgModule({
  imports: [CommonModule, MatButtonModule, RouterModule],
  exports: [NavButtonsComponent],
  declarations: [NavButtonsComponent],
  providers: []
})
export class NavButtonsModule {}
