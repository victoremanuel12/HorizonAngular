import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Pages/home/home.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./Pages/home/home.module').then(m => m.HomeModule) },
  { path: 'voo/detalhes/:id', loadChildren: () => import('./Pages/voo/voo.module').then(m => m.VooModule) },
  { path: 'loginAdmin', loadChildren: () => import('./Pages/loginAdmin/login.module').then(m => m.LoginModule) },
  { path: 'homeAdmin', loadChildren: () => import('./Pages/homeAdmin/home-admin.module').then(m => m.HomeAdminModule) },
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
