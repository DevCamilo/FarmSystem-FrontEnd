import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable()
export class CropService {
  url = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  cropByIdResponsable(id: any) {
    return this.http.get(this.url + '/list-crop-responsable/?id=' + id, httpOptions);
  }
}
