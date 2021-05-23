import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import { student } from './employee';


@Injectable({
  providedIn: 'root'
})
export class employeeservices {
_url:"..\assets\emp.json";
  constructor(private http:HttpClient) { }

  getEmployeelist():Observable<student[]>{
    return this.http.get<student[]>(this._url);
  }
}
