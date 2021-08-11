import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {NgForm} from '@angular/forms'
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  errorMessage: string

  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit(): void {
  }


  login(){
    this.router.navigate(['login'])
  }

  onSubmit(form: NgForm){

    const {username, password, passwordConf} = form.value

    const passwordConsitent = password === passwordConf

    if(!passwordConsitent){
      this.errorMessage = "password must be the same as confirmation password"
    }

    if(passwordConsitent && form.valid){
      this.authService.signUp(username, password)    
    }



    form.reset()
  }

}
