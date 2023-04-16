import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MartianDetailComponent } from './components/martian-detail/martian-detail.component';
import { MartianDetailComponentModule } from './components/martian-detail/martian-detail.component-module';

const routes: Routes = [
  { path: 'martian-detail/:id', component: MartianDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), MartianDetailComponentModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}
