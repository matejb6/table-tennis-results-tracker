import { NgModule } from '@angular/core';

import { CamelCaseSplitPipe } from './camel-case-split/camel-case-split.pipe';
import { FirstLetterUppercasePipe } from './first-letter-uppercase/first-letter-uppercase.pipe';

@NgModule({
  imports: [],
  exports: [CamelCaseSplitPipe, FirstLetterUppercasePipe],
  declarations: [CamelCaseSplitPipe, FirstLetterUppercasePipe],
  providers: []
})
export class PipesModule {}
