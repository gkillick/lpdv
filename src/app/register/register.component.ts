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

  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit(): void {
  }


  login(){
    this.router.navigate(['login'])
  }

  onSubmit(form: NgForm){

    const {username, password, passwordConf} = form.value
    console.log(username)
    console.log(password)

    const passwordConsitent = password === passwordConf

    if(passwordConsitent && form.valid){
      this.authService.signup(username, password).subscribe(res => {
        console.log(res)
      }, errorRes => {
        console.log(errorRes)
      })
    }

    form.reset()
  }

}
