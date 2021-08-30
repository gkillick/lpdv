import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';
import { DataService } from './services/data.service';
import {Router} from "@angular/router";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'lpdv';
  isCollapsed = true;
  mobileView = false;



  ngOnInit(): void{}


  constructor(
    private dataService: DataService,
    private authService: AuthService,
    public router: Router,
  ){}

  logout(): void {
    this.authService.logout();
  }
}
