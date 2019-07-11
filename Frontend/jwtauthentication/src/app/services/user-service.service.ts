import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private http: HttpClient ) { }

  logIn(user) {
    return this.http.post ('http://localhost:8080/login',  user ,{observe: 'response'});
    
  }
}



