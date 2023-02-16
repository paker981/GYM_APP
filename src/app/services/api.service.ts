import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private baseApiUrl: string = "https://localhost:7210";
  constructor(private http: HttpClient) { }

  getAllMemebers(){
    return this.http.get<User[]>(this.baseApiUrl +'/api/Gym');
    }
  addMember(user : any){
    return this.http.post<any>(this.baseApiUrl + '/api/Gym',user);
  }
  updateMember(id: string, user: User) {
    return this.http.put<User>(this.baseApiUrl + '/api/Gym/' + id, user);
  }
  deleteMember(id: string) {
  return this.http.delete<User>(this.baseApiUrl + '/api/Gym/' + id);}

  getMemeber(id: string){
    return this.http.get<User>(this.baseApiUrl +'/api/Gym/' + id);
    }

}
