import { NgModule } from '@angular/core';

import { PipesModule } from './pipes/pipes.module';
import { ServicesModule } from './services/services.module';

@NgModule({
  imports: [PipesModule, ServicesModule],
  exports: [PipesModule, ServicesModule],
  declarations: [],
  providers: []
})
export class SharedModule {}
