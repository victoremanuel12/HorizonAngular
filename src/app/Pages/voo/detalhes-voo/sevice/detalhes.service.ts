import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { url } from 'src/app/Api/api';

@Injectable({
  providedIn: 'root'
})
export class DetalhesService {
  constructor(private http: HttpClient) { }

  getAirplane(id: string): Observable<any>{
    return this.http.get(`${url}Flight/${id}`);
  }

  handleVisitor(data:any){
    return this.http.post(`${url}Visitor`, data)
  }

  handleBuy(data:any){
    return this.http.post(`${url}Buy`,data)
  }
  handleBuyer(data:any){
    return this.http.post(`${url}Buyer`,data)
  }


}

