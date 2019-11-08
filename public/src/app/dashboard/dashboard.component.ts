import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private _http: HttpService, private _router: Router) { }
  logged_user_email: string;
  messages = [];
  newMessage: string;

  ngOnInit() {
    if (this._http.logged_user_email == null){
      this._router.navigate(['/home']);
    }
    this.newMessage = "";
    this.logged_user_email = this._http.logged_user_email;
    let observable = this._http.getAllMessages();
    observable.subscribe((data)=>{
      this.messages = data['messages']
    })
    this.ghostUser()
  }
  // method that intitates ghost and generates random string every 30 seconds
  ghostUser(){
    if (this.logged_user_email == "ghost@ghost.com"){
      let observable = this._http.postMessage(this.generateMessage(), this.logged_user_email);
        observable.subscribe((data)=>{
        this.messages = data['messages'];
        setTimeout(() =>{
          this.ghostUser()
        }, 30000)
      })  
    } else {
      return
    }
  }
  //algo to create random string
  generateMessage(){
    let randomNumber1 = Math.floor(Math.random()* 20) + 1
    let randomNumber2 = Math.floor(Math.random()* 20) + 1
    
    return `Hello ${randomNumber1} Hi ${randomNumber2} Bye ${randomNumber1 + randomNumber2}`
  }

  delete(index){
    let observable = this._http.deleteMessage(index);
    observable.subscribe((data)=>{
      this.messages = data['messages'];
    })    
  }

  report(index){
    let observable = this._http.reportMessage(index);
    observable.subscribe((data)=>{
      this.messages = data['messages'];
    })   
  }

  postMessage(){
    let observable = this._http.postMessage(this.newMessage, this.logged_user_email);
    observable.subscribe((data)=>{
      this.messages = data['messages'];
      this.newMessage = null;
    })   
  }
}
