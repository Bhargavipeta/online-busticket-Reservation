import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Register } from './register';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SharedserviceService {

  constructor(private http: HttpClient) { }

  /*getRegisters(){
    var headers = new Headers();
    headers.append('Content-Type','application/json')
    return this.http.get<any>('http://localhost:4000/register', {'headers':headers})
  }*/

  addRegister(newRegister:any){
    var headers = new Headers();
    headers.append('Content-Type','application/json')
    return this.http.post<any>('http://localhost:4000/register/add',newRegister,{})
  }

  login(newRegister:any){
    var headers = new Headers();
    headers.append('Content-Type','application/json')
    return this.http.post<any>('http://localhost:4000/auth/login',newRegister,{})
  }
}
