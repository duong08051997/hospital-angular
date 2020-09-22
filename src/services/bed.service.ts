import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BedService {
URL = 'http://127.0.0.1:8000/api/beds';
  constructor(private http: HttpClient) { }
  getAll(): Observable<any>{
return  this.http.get(this.URL);
  }
}
