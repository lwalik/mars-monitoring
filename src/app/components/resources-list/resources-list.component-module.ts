import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { ResourcesListComponent } from './resources-list.component';
import {MatTableModule} from '@angular/material/table'; 

@NgModule({
  imports: [MatCardModule, CommonModule, MatTableModule],
  declarations: [ResourcesListComponent],
  providers: [],
  exports: [ResourcesListComponent]
})
export class ResourcesListComponentModule {
}
