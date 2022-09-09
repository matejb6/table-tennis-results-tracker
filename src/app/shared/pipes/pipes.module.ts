import { NgModule } from '@angular/core';

import { FirstLetterUppercasePipe } from './first-letter-uppercase/first-letter-uppercase.pipe';

@NgModule({
  imports: [],
  exports: [FirstLetterUppercasePipe],
  declarations: [FirstLetterUppercasePipe],
  providers: []
})
export class PipesModule {}
