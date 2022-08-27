import { NgModule } from '@angular/core';

import { TableModule } from './table/table.module';

@NgModule({
  imports: [TableModule],
  exports: [TableModule],
  declarations: [],
  providers: []
})
export class ComponentsModule {}
