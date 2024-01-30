import { NgModule, importProvidersFrom } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VooCardComponent } from './voo-card/voo-card.component';
import { ReactiveFormsModule } from '@angular/forms';

import {CdkAccordionModule} from '@angular/cdk/accordion';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideHttpClient } from '@angular/common/http';
import { MatNativeDateModule } from '@angular/material/core';
import { AcordionPassageiroComponent } from '../acordion-passageiro/acordion-passageiro.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';


@NgModule({
  declarations: [
    VooCardComponent,
    AcordionPassageiroComponent
  ],
  imports: [
    CommonModule,
    MatExpansionModule,
    CdkAccordionModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatCheckboxModule,
  ],
  exports:[VooCardComponent,AcordionPassageiroComponent]
,
providers:[]})
export class VooComponentModule { }
