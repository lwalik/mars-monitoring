import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResourcesListComponent } from './components/resources-list/resources-list.component';
import { ResourcesListComponentModule } from './components/resources-list/resources-list.component-module';
import { MartiansListComponent } from './components/martians-list/martians-list.component';
import { JobListComponent } from './components/job-list/job-list.component';
import { MartianFormComponent } from './components/martian-form/martian-form.component';
import { JobListComponentModule } from './components/job-list/job-list.component-module';
import { MartiansListComponentModule } from './components/martians-list/martians-list.component-module';
import { MartianFormComponentModule } from './components/martian-form/martian-form.component-module';
import { MartianServiceModule } from './services/martian.service-module';

const routes: Routes = [{ path: 'resources-list', component: ResourcesListComponent },   { path: '', component: MartiansListComponent },
{ path: 'job-list', component: JobListComponent },
{ path: 'martian-form', component: MartianFormComponent },];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    JobListComponentModule,
    MartiansListComponentModule,
    MartianFormComponentModule,
    MartianServiceModule,
    ResourcesListComponentModule
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
