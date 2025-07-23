import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Duration } from '../Duration/duration/duration';

@Injectable({
  providedIn: 'root'
})
export class DurationService {
  private url = "https://localhost:7015/api/Duration";
  constructor(private http:HttpClient){}

  getDuration():Observable<any>{
    return this.http.get<any>(this.url);
  }
  
  addDuration(data:any):Observable<any>{
    return this.http.post<any>(this.url,data);
  }
  
  updateDuration(data:any):Observable<any>{
    return this.http.put<any>(this.url,data);
  }
  
  removeDuration(data:any):Observable<any>{
    return this.http.delete<any>(this.url+"?id="+data);
  }
}
export { Duration };
