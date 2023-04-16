import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatListModule } from '@angular/material/list';
import { MartianDetailComponent } from './martian-detail.component';

@NgModule({
  imports: [MatCardModule, MatFormFieldModule, CommonModule, MatListModule],
  declarations: [MartianDetailComponent],
  providers: [],
  exports: [MartianDetailComponent],
})
export class MartianDetailComponentModule { }
