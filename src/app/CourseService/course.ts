import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Course } from '../Course/course/course';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  private apiUrl ="https://localhost:7015/api/Courses";

  constructor(private http:HttpClient){}

  getCourse():Observable<any>{
    return this.http.get<any>(this.apiUrl);
  }

  addCourse(data:any):Observable<any>{
    return this.http.post<any>(this.apiUrl,data);
  }

  updateCourse(data:any):Observable<any>{
    return this.http.put<any>(this.apiUrl,data);
  }

  removeCourse(data:any):Observable<any>{
    return this.http.delete<any>(this.apiUrl+"?id="+data);
  }
  
}
export { Course };

