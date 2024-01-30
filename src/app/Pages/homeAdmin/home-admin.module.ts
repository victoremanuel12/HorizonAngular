import { NgModule } from '@angular/core';
import { AsyncPipe, CommonModule } from '@angular/common';
import { HomeAdminComponent } from './home-admin.component';
import { MatStepperModule } from '@angular/material/stepper';
import { VooComponentModule } from 'src/app/Components/voo/vooComponent.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { RoutingModule } from './home-admin.routing.module';


@NgModule({
  declarations: [
    HomeAdminComponent
  ],
  imports: [
    CommonModule,
    RoutingModule,
    MatStepperModule,
    VooComponentModule,
    MatStepperModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    AsyncPipe,
  ]
})
export class HomeAdminModule { }
