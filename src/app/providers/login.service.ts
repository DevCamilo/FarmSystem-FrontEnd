import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Injectable()
export class LoginService {
  url = 'http://localhost:3000/login';

  constructor(private http: HttpClient) { }

  loginFunction(user: object) {
    return this.http.post(this.url, JSON.stringify(user), httpOptions );
  }
}
