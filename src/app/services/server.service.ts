import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { personModel } from '../components/models/person.model';

@Injectable({
  providedIn: 'root'
})
export class ServerService {
  baseUrl = 'http://localhost:5000/';
  person: any;
  token: any = '';
  
  constructor(private http: HttpClient) { }

  registerUser(a: personModel): Observable<any> {
    return this.http.post(this.baseUrl + "api/users/create", a);
  }

  updateUser(updatepersonForm: personModel): Observable<Object> {
   console.log(updatepersonForm)
    return this.http.put(this.baseUrl + "api/users/updateUser" ,updatepersonForm);
  
  }

  createToken(emailpassword:any): Observable<any>{
    console.log(emailpassword);
    
    return this.http.post(this.baseUrl +"api/users/login",emailpassword)
  }


  post<T>(path: String, data: {}): Observable<T> {
    return this.http.post<T>(this.baseUrl + path, data)
  }

  postWithToken<T>(path: String, data: {}, headers?: object): Observable<T> {
    return this.http.post<T>(this.baseUrl + path, data, this.getOptions(headers))
  }
  getWithToken<T>(path: String, headers?: object): Observable<T> {
    return this.http.get<T>(this.baseUrl + path, this.getOptions(headers))
  }


  getOptions(headers?: any) {
    headers = headers? headers : {};
    headers['content-type'] = 'application/json';
    headers['x-access-token'] = this.token;
    return {
      headers: new HttpHeaders(headers)
    }
  }








}
  