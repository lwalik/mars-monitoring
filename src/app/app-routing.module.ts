import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResourcesListComponent } from './components/resources-list/resources-list.component';
import { ResourcesListComponentModule } from './components/resources-list/resources-list.component-module';

const routes: Routes = [{ path: 'resources-list', component: ResourcesListComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes), ResourcesListComponentModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
