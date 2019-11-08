import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-loginreg',
  templateUrl: './loginreg.component.html',
  styleUrls: ['./loginreg.component.css']
})
export class LoginregComponent implements OnInit {
  newUser: any;
  currentUser: any; 
  error: any;
  
  petetest = ""
  notFound: any;

  constructor(private _httpService: HttpService,private _route: ActivatedRoute, private _router: Router) {}

  ngOnInit() {
    this.newUser = {email: "", password: ""}
    this.currentUser = {email: "", password: ""}
  }

  login(){
    let observable = this._httpService.loginUser(this.currentUser);
    observable.subscribe (data =>{
      if (data['error']){
        // add error to front-end
        console.log("THESE ARE THE ERRORS", data['error'])
      }
      else{
        this._httpService.logged_user_email = this.currentUser.email;
        this._router.navigate(['/dashboard']);
      }
    })
  }

  register(){
    let observable = this._httpService.registerUser(this.newUser);
    observable.subscribe (data =>{
      if (data['error']){
        // add error to front-end
        console.log("THESE ARE THE ERRORS", data['error'])
      } else {
        this._httpService.logged_user_email = this.newUser.email;
        this._router.navigate(['/dashboard']);
      }
    })
  }
}
