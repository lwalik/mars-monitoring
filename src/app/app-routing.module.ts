import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MartiansListComponent } from './components/martians-list/martians-list.component';
import { MartiansListComponentModule } from './components/martians-list/martians-list.component-module';

const routes: Routes = [
  { path: 'martians-list', component: MartiansListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), MartiansListComponentModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}
