import { RouterModule, Routes } from '@angular/router';

import { NgModule } from '@angular/core';
import { DetalhesVooComponent } from './detalhes-voo/detalhes-voo.component';

const routes: Routes = [
  {
    path: '',
    component: DetalhesVooComponent,
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VooDetalhesRouting { }