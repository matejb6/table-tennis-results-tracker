import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';

import { NavButtonsModule } from '@shared/components/nav-buttons/nav-buttons.module';
import { ToolbarComponent } from './toolbar.component';

@NgModule({
  imports: [MatButtonModule, MatIconModule, MatToolbarModule, NavButtonsModule],
  exports: [ToolbarComponent],
  declarations: [ToolbarComponent],
  providers: []
})
export class ToolbarModule {}
