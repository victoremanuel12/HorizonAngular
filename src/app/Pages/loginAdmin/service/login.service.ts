import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { url } from 'src/app/Api/api';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  loginAdmin(formData : any): Observable<any>{
    return this.http.post(`${url}LoginAdmin`,formData);
  }
}
