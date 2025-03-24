import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';

import { NavButtonsComponent } from './nav-buttons.component';
import { PipesModule } from '../../pipes/pipes.module';

@NgModule({
  imports: [CommonModule, MatButtonModule, RouterModule, PipesModule],
  exports: [NavButtonsComponent],
  declarations: [NavButtonsComponent],
  providers: []
})
export class NavButtonsModule {}
