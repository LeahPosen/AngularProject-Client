import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { User } from "../models/user";


@Injectable()
export class userService {
  users: User[] = [];
  userName?: string;
  constructor(private _http: HttpClient) {
  }
  getUser(): Observable<User[]> {
    return this._http.get<User[]>("/api/User");
  }
  // getUserById(id: number): Observable<User[]> {
  //   return this._http.get<User[]>(`/api/User/${id}`);
  // }
  getUserByName(name: string): Observable<User> {
    return this._http.get<User>(`/api/User/${name}`);
  }
  postUser(user: User): Observable<boolean> {
    return this._http.post<boolean>("/api/User/", user);
  }
  deleteUser(id: number): Observable<boolean> {
    return this._http.delete<boolean>(`/api/User/${id}`)
  }
  putUser(id: number, u: User): Observable<boolean> {
    return this._http.put<boolean>(`/api/User/${id}`, u)
  }

  checkUser(name: string) {
    this.getUser().subscribe(data => {
      this.users = data;
    })
    const user = this.users.find(u => u.name === name);
    return user;
  }

  getUserName() {
    return this.userName;
  }
  setUserName(name: string) {
    this.userName = name;
  }
}