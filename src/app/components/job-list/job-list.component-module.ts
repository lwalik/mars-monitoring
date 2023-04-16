import { NgModule } from '@angular/core';
import { JobListComponent } from './job-list.component';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [MatCardModule, MatTableModule, CommonModule],
  declarations: [JobListComponent],
  providers: [],
  exports: [JobListComponent],
})
export class JobListComponentModule {}
