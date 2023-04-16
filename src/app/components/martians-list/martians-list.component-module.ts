import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MartiansListComponent } from './martians-list.component';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
@NgModule({
  imports: [CommonModule, MatCardModule, MatTableModule],
  declarations: [MartiansListComponent],
  providers: [],
  exports: [MartiansListComponent],
})
export class MartiansListComponentModule {}
