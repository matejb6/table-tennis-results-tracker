import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';

import { PipesModule } from '@shared/pipes/pipes.module';
import { TableComponent } from './table.component';

@NgModule({
  imports: [CommonModule, MatTableModule, PipesModule],
  exports: [TableComponent],
  declarations: [TableComponent],
  providers: []
})
export class TableModule {}
