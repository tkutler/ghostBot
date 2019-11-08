import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  logged_user_email: string;

  constructor(private _http: HttpClient) {  }

  getAllMessages(){
    return this._http.get("/message");
  }

  registerUser(data){
    return this._http.post("/user/register", data);
  }

  loginUser(data){
    return this._http.post("/user/login", data);
  }

  deleteMessage(index){
    return this._http.get(`/delete/${index}`);
  }

  reportMessage(index){
    return this._http.get(`/report/${index}`);
  }

  postMessage(message, logged_user_email){
    return this._http.post("/message", {message, logged_user_email});
  }
}

 
