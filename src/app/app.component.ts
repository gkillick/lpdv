import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';
import { DataService } from './services/data.service';
import { ItemsService } from './services/items.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'lpdv';
  isCollapsed = true;


  constructor(private dataService: DataService, private authService: AuthService){

  }

  ngOnInit(){
    this.authService.autoLogin()
    console.log('getting data')
    //this.dataService.getStoredData()
  }

  logout(){
    this.authService.logout()
  }
}
