import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const baseUrl = 'http://localhost:8001/api/user';
const loginUrl = 'http://localhost:8001/api/auth/login';
const infoUrl  = 'http://localhost:8001/api/user/info';
const logoutUrl  = 'http://localhost:8001/api/auth/logout';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

login_page = 'login';
register_page = 'register';

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get(baseUrl);
  }

  create(data) {
    return this.http.post(baseUrl, data);
  }

  loginCall(data) {
    return this.http.post(loginUrl, data);
  }

  getinfo(data){
    return this.http.post(infoUrl,data);
  }

  logout(){
    return this.http.get(logoutUrl);
  }

  nav(data){
     if(data == this.login_page || data == this.register_page  ){
          console.log("if",data)
          return false;
       }else{
          console.log("else",data)
          return true;
       }       
  }

}
