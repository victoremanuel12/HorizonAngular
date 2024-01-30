import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetalhesVooComponent } from './detalhes-voo/detalhes-voo.component';
import { VooDetalhesRouting } from './detalhes-voo.routing.module';
import {MatStepperModule} from '@angular/material/stepper';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { VooComponentModule } from 'src/app/Components/voo/vooComponent.module';
import {MatSelectModule} from '@angular/material/select';

@NgModule({
  declarations: [
    DetalhesVooComponent
  ],
  imports: [
    CommonModule,
    VooDetalhesRouting,
    MatStepperModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatCheckboxModule,
    VooComponentModule,  
    MatSelectModule

  ],
  providers:[    {
    provide: STEPPER_GLOBAL_OPTIONS,
    useValue: {showError: true},
  },]
})
export class VooModule { }
