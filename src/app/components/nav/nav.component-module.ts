import { NgModule } from '@angular/core';
import { NavComponent } from './nav.component';
import { MatListModule } from '@angular/material/list';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [MatListModule, RouterModule, CommonModule],
  declarations: [NavComponent],
  providers: [],
  exports: [NavComponent],
})
export class NavComponentModule {}
