import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ObjectUnsubscribedErrorCtor } from 'rxjs/internal/util/ObjectUnsubscribedError';
import { Userl } from './userl';

@Injectable({
  providedIn: 'root'
})
export class LoginuserService {
  private baseUrl="http://localhost:8081/user/login";

  constructor(private httpClient: HttpClient) { }

  loginuser(userl: Userl):Observable<object>
{
  console.log(userl)
  return this.httpClient.post('${this.baseUrl}',userl);
}}
