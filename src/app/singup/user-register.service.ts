import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Register } from './register';

@Injectable({
  providedIn: 'root'
})
export class UserRegisterService {
   baseUrl="http://localhost:8081/user/login";

  constructor(private httpClient: HttpClient) { }

  userRegisterRegister(register: Register):Observable<object>{
    console.log(register);
    return this.httpClient.post('baseUrl',register);
    

  }
}
