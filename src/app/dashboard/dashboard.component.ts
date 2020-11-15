import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  items =  [{name: "donut", count: 31}, {name: "bread", count: 42}];

  orders = [
    {orderNumber: 1, name: "John Smith", summary: "3 breads 2 donuts"},
    {orderNumber: 2, name: "John Smith", summary: "3 breads 2 donuts"},
    {orderNumber: 3, name: "John Smith", summary: "3 breads 2 donuts"},
    {orderNumber: 4, name: "John Smith", summary: "3 breads 2 donuts"},
  
  ]
  displayedColumns = ["name", "count"];
  displayedOrderColumns = ["orderNumber", "name", "summary", "details"]

}
