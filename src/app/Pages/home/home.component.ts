import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { HomeService } from './service/home.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  title = 'Horizon';
  Voos = [];
  constructor(private _formBuilder: FormBuilder, private homeService: HomeService, private router: Router )  {}

  ngOnInit(): void {
    this.homeService.getAirplanes().subscribe({
      next: res=>{
        this.Voos = res.data;
      },
      error: (res)=> Swal.fire({
        title: res.errorMessage,
        icon: "error"
      })
    })
  }

  public navigateToLoginAdmin(){
    this.router.navigate(['loginAdmin']);
  }


    
}
