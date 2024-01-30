import { NgModule } from '@angular/core';
import { AsyncPipe, CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { RoutingModule } from './login.routing.module';
import { MatStepperModule } from '@angular/material/stepper';
import { VooComponentModule } from 'src/app/Components/voo/vooComponent.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';


@NgModule({
  declarations: [
    LoginComponent
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
export class LoginModule { }
