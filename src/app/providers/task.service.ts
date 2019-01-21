import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  url = 'http://localhost:3000/list-task'

  constructor(private http: HttpClient) { }
  
  taskIdUser(id: any) {
    return this.http.get(this.url + '-id-receiver/?id=' + id, httpOptions);
  }
}
