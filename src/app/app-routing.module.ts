import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MartianDetailComponent } from './components/martian-detail/martian-detail.component';
import { MartianDetailComponentModule } from './components/martian-detail/martian-detail.component-module';
import { MartiansListComponent } from './components/martians-list/martians-list.component';
import { MartiansListComponentModule } from './components/martians-list/martians-list.component-module';
import { JobListComponent } from './components/job-list/job-list.component';
import { JobListComponentModule } from './components/job-list/job-list.component-module';
const routes: Routes = [
  { path: '', component: MartiansListComponent },
  { path: 'job-list', component: JobListComponent },
  { path: 'martian-detail/:id', component: MartianDetailComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    MartianDetailComponentModule,
    JobListComponentModule,
    MartiansListComponentModule,
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
