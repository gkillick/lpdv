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

  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit(): void {

    if(this.authService.user){
      this.authService.autoLogin()
    }
  }

  onSubmit(form: NgForm){

    console.log(form)

    const {username, password} = form.value

    if(form.valid){

      this.authService.login(username, password).subscribe(res => {
        console.log(res)

        
        this.router.navigate(['/dashboard'])

      }, errorRes => {
        console.log(errorRes)
      })
    }

    form.reset()
  }

  signUp(){
    this.router.navigate(['/register'])
  }

}
