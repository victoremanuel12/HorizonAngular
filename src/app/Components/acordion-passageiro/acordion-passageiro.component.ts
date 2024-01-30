import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-acordion-passageiro',
  templateUrl: './acordion-passageiro.component.html',
  styleUrls: ['./acordion-passageiro.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AcordionPassageiroComponent {
  panelOpenState = false;
  @Input() index: number = 0;
  @Input() classId: string | null | undefined = '';
  @Output() event = new EventEmitter<any>();

  
  constructor(private _formBuilder: FormBuilder) {}

  firstFormGroup = this._formBuilder.group({
    name: ['', Validators.required],
    classId: [this.classId],
    cpf: ['', Validators.required],
    birthdate: ['', Validators.required],
    price: [0],
    dispatch: [true],
    canceled: [false]
  });

  changeForm(){
    console.log("oi")
    this.event.emit(this.firstFormGroup.value)
  }
}
