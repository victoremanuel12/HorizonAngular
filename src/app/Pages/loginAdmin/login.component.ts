import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { LoginService } from './service/login.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  constructor(
    private _formBuilder: FormBuilder,
    private _loginService: LoginService,
    private router: Router
  ) {}

  formLoginAdmin = this._formBuilder.group({
    username: ['', Validators.required],
    password: ['', Validators.required],
  });

  onSubmit() {
    const formData = this.formLoginAdmin.value;
    this._loginService.loginAdmin(formData).subscribe({
      next: (res) => {
        this.router.navigate(['homeAdmin']);
      },
      error: (error)=> Swal.fire({
        title: "Erro ao realizar login",
        icon: "error"
      })
    });
  }
}
