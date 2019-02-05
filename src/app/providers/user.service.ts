import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class UserService {
  url = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  listUserFunction() {
    return this.http.get(this.url + '/list-client', httpOptions);
  }

  createUserFunction(user: any){
    return this.http.post(this.url + '/create-client', user, httpOptions );
  }
}
