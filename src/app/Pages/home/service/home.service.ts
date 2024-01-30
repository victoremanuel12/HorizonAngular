import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { url } from 'src/app/Api/api';
@Injectable({
  providedIn: 'root'
})
export class HomeService {
  
  constructor(private http: HttpClient) { }

  getAirplanes(): Observable<any>{
    return this.http.get(`${url}Flight/AllFlights`);
  }
}
