import { NgModule } from '@angular/core';

import { CamelCaseSplitPipe, FirstLetterUppercasePipe } from '../pipes';

@NgModule({
  imports: [],
  exports: [CamelCaseSplitPipe, FirstLetterUppercasePipe],
  declarations: [CamelCaseSplitPipe, FirstLetterUppercasePipe],
  providers: []
})
export class PipesModule {}
