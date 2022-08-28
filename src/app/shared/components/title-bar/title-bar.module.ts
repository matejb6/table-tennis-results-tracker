import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

import { TitleBarComponent } from './title-bar.component';

@NgModule({
  imports: [MatButtonModule],
  exports: [TitleBarComponent],
  declarations: [TitleBarComponent],
  providers: []
})
export class TitleBarModule {}
