import { Component, OnInit } from '@angular/core';
import jwt_decode from 'jwt-decode'
import {NgForm} from '@angular/forms'
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  errorMessage: string

  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit(): void {

    if(this.authService.userData){
      //this.authService.autoLogin()
    }
  }

  onSubmit(form: NgForm){

    const {username, password} = form.value

    if(form.valid){
      this.authService.login(username, password)
    }

    form.reset()
  }

  signUp(){
    this.router.navigate(['/register'])
  }

}
