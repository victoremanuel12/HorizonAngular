import { AfterViewInit, ChangeDetectionStrategy, Component, OnChanges, OnInit, QueryList, SimpleChanges, ViewChildren } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ThemePalette } from '@angular/material/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { AcordionPassageiroComponent } from 'src/app/Components/acordion-passageiro/acordion-passageiro.component';
import Swal from 'sweetalert2';
import { DetalhesService } from './sevice/detalhes.service';

export interface Task {
  name: string;
  completed: boolean;
  color: ThemePalette;
  subtasks?: Task[];
}

@Component({
  selector: 'app-detalhes-voo',
  templateUrl: './detalhes-voo.component.html',
  styleUrls: ['./detalhes-voo.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DetalhesVooComponent implements OnInit, OnChanges, AfterViewInit {
  allComplete: boolean = false;
  assentosEscolhidos: number = 0;

  @ViewChildren(AcordionPassageiroComponent) componentesFilhos: QueryList<AcordionPassageiroComponent> | undefined;
  dadosDosFilhos: Array<any> | undefined;
  id: string | null = ''; 
  isLinear = false;
  assentosDisponiveis: number = 0
  classAir: any =[]
  data: any;
  passageirosvalidos: boolean = false;

  idVisitor: string = '';
  idBuyer: string = '';
  classEscolhida: string | null | undefined = '';

  firstFormGroup = this._formBuilder.group({
    name: ['', Validators.required],
    cpf: ['', Validators.required],
    birthdate: ['', Validators.required],
    email: ['', Validators.required],
  });
  buyFormGroup = this._formBuilder.group({
    name: ['', Validators.required],
    cpf: ['', Validators.required],
    birthdate: ['', Validators.required],
    email: ['', Validators.required],
  });

  secondFormGroup = this._formBuilder.group({
    classe: ['', Validators.required],
    formassentosDisponiveis: ['', Validators.required],
  });
  
  task: Task = {
    name: 'Indeterminate',
    completed: false,
    color: 'primary',
    subtasks: [],
  };

  setAll(completed: boolean) {
    if(completed){
      this.buyFormGroup.patchValue(this.firstFormGroup.value)
      this.allComplete = completed;
    }
    else{

    }
  }

  getRange(value: number): number[] {
    return Array.from({ length: value }, (_, index) => index);
  }
  constructor(private _formBuilder: FormBuilder, private route: ActivatedRoute, private detalhesService: DetalhesService, private router: Router) {}
  
  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    if(this.id){
      this.detalhesService.getAirplane(this.id).subscribe({
        next: (res)=> {
          this.data = res.data;
          this.classAir = res.data.classes
        },
        error: (res)=>{
          Swal.fire({
            title: res.errorMessage,
            icon: 'error'
          })
        }
      })
    }else{
      this.router.navigate(['/home',''])
    }

  }
  
  verificaTicketsEscolhidos(){
    this.passageirosvalidos = false
    this.assentosEscolhidos = Number(this.secondFormGroup.get('formassentosDisponiveis')?.value)
    this.classEscolhida = this.secondFormGroup.get('classe')?.value
    // this.assentosDisponiveis = ;
    
    this.assentosDisponiveis = this.classAir.find((objeto:any) => objeto.id === this.secondFormGroup.get('classe')?.value).seats

  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('oi')
  }

  adicionarDadosPassageiro(){
    let arrVirtual: Partial<{ name: string | null; cpf: string | null; birthdate: string | null; email: string | null; }>[] = [];
    let isAdd: Boolean = true

    if(this.componentesFilhos){
      
      this.componentesFilhos.forEach(componenteFilho => {
        if(!componenteFilho.firstFormGroup.valid){
          isAdd = false;
          Swal.fire({
            title: "Preencha os dados de todos os passageiros",
            icon:'error'
          })
        }
        
        return;
      });

      if(isAdd){ 
        this.componentesFilhos.forEach(componenteFilho => {
          arrVirtual.push(componenteFilho.firstFormGroup.value)
          this.passageirosvalidos = true
        });
      }
      this.dadosDosFilhos = arrVirtual
    }
  }

  ngAfterViewInit() {
  }

  async realizarCompra() {
    try {
        if (!this.idVisitor) {
            const visitorResponse: any = await this.detalhesService.handleVisitor(this.firstFormGroup.value).toPromise();
            this.idVisitor = visitorResponse.data.id;
        }

        if (!this.idBuyer) {
            const buyerResponse : any = await this.detalhesService.handleBuyer(this.buyFormGroup.value).toPromise();
            this.idBuyer = buyerResponse.data.id;
            console.log("Buyer response", buyerResponse);
            console.log("idBuyer", this.idBuyer);
        }

        const jsonHandleBuy = {
            visitorId: this.idVisitor,
            date: new Date(),
            canceled: false,
            buyerId: this.idBuyer,
            tickets: this.dadosDosFilhos
        };

        const buyResponse = await this.detalhesService.handleBuy(jsonHandleBuy).toPromise();
        Swal.fire({
            title: 'Compra Realizada com sucesso',
            icon: 'success'
        });

        this.router.navigate(['/home']);
    } catch (error) {
        Swal.fire({
            title: 'Não foi possível realizar a compra, verifique os dados',
            icon: 'error'
        });
        console.error("Error", error);
    }
  }
}
