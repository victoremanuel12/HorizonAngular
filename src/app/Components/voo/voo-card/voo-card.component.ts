import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-voo-card',
  templateUrl: './voo-card.component.html',
  styleUrls: ['./voo-card.component.css']
})
export class VooCardComponent implements OnInit{
  @Input() data: any;
  public date: Date = new Date();
  public dateFormated: string = '';
  public timeFormated: string = '';
  
  constructor(private router: Router){}
  
  ngOnInit(): void {
    this.date = new Date(this.data.time)

    this.dateFormated = `${this.date.getDate().toString().padStart(2, '0')}/${(this.date.getMonth() + 1).toString().padStart(2, '0')}/${this.date.getFullYear()}`; // Formata a data
    this.timeFormated = `${this.date.getHours().toString().padStart(2, '0')}:${this.date.getMinutes().toString().padStart(2, '0')}`; // Formata a hora
  
  }

  onSubmit(id: string){
    this.router.navigate(['/voo/detalhes/', id]);
  }

    

}
