import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Course } from "../models/course";


@Injectable()
export class courseService {
  courses: Course[] = [];

  constructor(private _http: HttpClient) {
  }
  get(){
    this.getCourse().subscribe(data=>{
      this.courses=data;
    })
  }
  getCourse(): Observable<Course[]> {
    return this._http.get<Course[]>("/api/Course");
  }
  getCourseById(id: boolean): Observable<Course[]> {
    return this._http.get<Course[]>(`/api/Course/${id}`);
  }
  postCourse(course: Course): Observable<boolean> {
    return this._http.post<boolean>("/api/Course/", course)
  }
  deleteCourse(id: number): Observable<boolean> {
    return this._http.delete<boolean>(`/api/Course/${id}`)
  }
  putCourse(id: number, c: Course): Observable<boolean> {
    return this._http.put<boolean>(`/api/Course/${id}`, c)
  }
  checkCourse(cname: string,lname:string) {
    this.getCourse().subscribe(data => {
      this.courses = data;
    })
    const course = this.courses.find(c => c.name===cname&&c.lecturer?.name === lname);
    return course;
  }
}