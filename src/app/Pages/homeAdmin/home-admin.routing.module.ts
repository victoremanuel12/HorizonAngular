import { RouterModule, Routes } from '@angular/router';

import { NgModule } from '@angular/core';
import { HomeAdminComponent } from './home-admin.component';
const routes: Routes = [
  {
    path: '',
    component: HomeAdminComponent,
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoutingModule { }
