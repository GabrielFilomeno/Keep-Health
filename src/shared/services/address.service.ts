import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddressService {

  constructor(private httpClient: HttpClient) { }
  getCep(cep: string): Observable<any>{
    let url = `https://viacep.com.br/ws/${cep}/json/`;

    return this.httpClient.get(url);
  }
}
