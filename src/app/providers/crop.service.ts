import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': 'Bearer '+ localStorage.getItem('token')
  })
};

@Injectable()
export class CropService {
  url = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  cropByIdResponsable(id: any) {
    return this.http.get(this.url + '/list-crop-responsable/?id=' + id, httpOptions);
  }

  saveCropFunction(crop: any) {
    return this.http.post(this.url + '/create-crop', crop, httpOptions);
  }
}
