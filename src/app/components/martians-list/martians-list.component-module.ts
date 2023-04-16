import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MartiansListComponent } from './martians-list.component';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    MatTableModule,
    MatSelectModule,
    MatButtonModule,
  ],
  declarations: [MartiansListComponent],
  providers: [],
  exports: [MartiansListComponent],
})
export class MartiansListComponentModule {}
