import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MartiansListComponent } from './components/martians-list/martians-list.component';
import { MartiansListComponentModule } from './components/martians-list/martians-list.component-module';
import { JobListComponent } from './components/job-list/job-list.component';
import { JobListComponentModule } from './components/job-list/job-list.component-module';
const routes: Routes = [
  { path: '', component: MartiansListComponent },
  { path: 'job-list', component: JobListComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    JobListComponentModule,
    MartiansListComponentModule,
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
