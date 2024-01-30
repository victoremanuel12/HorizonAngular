import { NgModule } from '@angular/core';
import { AsyncPipe, CommonModule } from '@angular/common';
import { HomeComponent } from '../home/home.component';
import { VooComponentModule } from 'src/app/Components/voo/vooComponent.module';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { RouterModule } from '@angular/router';
import { RoutingModule } from './home.routing.module';
import { MatStepperModule } from '@angular/material/stepper';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [
    HomeComponent
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
  ],
  exports: [HomeComponent]
})
export class HomeModule { }
