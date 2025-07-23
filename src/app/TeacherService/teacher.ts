import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Teacher } from '../Teacher/teacher/teacher';

@Injectable({
  providedIn: 'root'
})
export class TeacherService {
  private Url = "https://localhost:7015/api/Teacher";

  constructor(private http:HttpClient){}

  getTeacher():Observable<any>{
    return this.http.get<any>(this.Url);
  }

  addTeacher(data:any):Observable<any>{
    return this.http.post<any>(this.Url,data);
  }

  updateTeacher(data:any):Observable<any>{
    return this.http.put<any>(this.Url,data);
  }

  removeTeacher(data:any):Observable<any>{
    return this.http.delete<any>(this.Url+"?id="+data);
  }
}
export { Teacher };