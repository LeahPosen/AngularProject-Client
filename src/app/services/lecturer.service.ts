import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Lecturer } from "../models/lecturer";


@Injectable()
export class lecturerService {

  lecturers: Lecturer[] = [];

  constructor(private _http: HttpClient) {
  }
  getLecturer(): Observable<Lecturer[]> {
    return this._http.get<Lecturer[]>("/api/Lecturer");
  }
  geLecturerById(id: number): Observable<Lecturer> {
    return this._http.get<Lecturer>(`/api/Lecturer/${id}`);
  }
  postLecturer(lecturerList: Lecturer): Observable<boolean> {
    return this._http.post<boolean>("/api/Lecturer/", lecturerList)
  }
  deleteLecturer(id: number): Observable<boolean> {
    return this._http.delete<boolean>(`/api/Lecturer/${id}`)
  }
  putLecturer(id: number, l: Lecturer): Observable<boolean> {
    return this._http.put<boolean>(`/api/Lecturer/${id}`, l)
  }


  checkLecturer(name: string) {
    this.getLecturer().subscribe(data => {
      this.lecturers = data;
    })
    const lecturer = this.lecturers.find(l => l.name === name);
    return lecturer;
  }
}