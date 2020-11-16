import { Component, OnInit } from '@angular/core';
import { ItemsService } from './services/items.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'lpdv';
  isCollapsed = true;


  constructor(private itemService: ItemsService){

  }

  ngOnInit(){

    this.itemService.getStoredData()
  }
}
