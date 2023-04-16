import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JobListComponent } from './components/job-list/job-list.component';
import { JobListComponentModule } from './components/job-list/job-list.component-module';

const routes: Routes = [{ path: 'job-list', component: JobListComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes), JobListComponentModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}
