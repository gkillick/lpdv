import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { NewOrderComponent } from '../new-order/new-order.component';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  orderTraker = 1

  constructor(public dialog: MatDialog, private dataService: DataService, private changeDetection: ChangeDetectorRef ) { }

  ngOnInit(): void {
    console.log('hello')
    this.orderTraker = 1

    this.orders = this.dataService.orders.map(this.formatOrder.bind(this))

    this.dataService.orderChanged.subscribe(orders => {
      console.log('order changed')
      this.orderTraker = 1
      this.orders = orders.map(this.formatOrder.bind(this))

      this.changeDetection.detectChanges()
    })
  }


  items =  [{name: "donut", count: 31}, {name: "bread", count: 42}];
  orders = []
  displayedColumns = ["name", "count"];
  displayedOrderColumns = ["orderNumber", "name", "summary", "details"]


  formatOrder(order){

      console.log(order)
      var description = ""
      for(let item_order of order.itemOrders){
        description = description + item_order.item.name + " "
        description = description + item_order.amount+ " "
      }
      return {orderNumber: this.orderTraker++, name: order.name, summary: description}
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(NewOrderComponent, {
      width: '100%',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}
