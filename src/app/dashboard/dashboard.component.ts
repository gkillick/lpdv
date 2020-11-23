import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { MatTable, MatTableDataSource } from '@angular/material/table';
<<<<<<< HEAD
import { EditOrderComponent } from '../edit-order/edit-order.component';
=======
import { Subject } from 'rxjs';
import { Order } from '../models/order.model';
>>>>>>> c2790677a47eae8f94fab098c9261e742a3931ad
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
    this.orderTraker = 1
    this.items.data = this.dataService.orderCounts


    this.currentlySelctedDate = new Date();
    this.currentlySelctedDate.setHours(0,0,0,0);

    this.orders = this.dataService.orders.map(this.formatOrder.bind(this))

    this.dataService.orderChanged.subscribe(orders => {
<<<<<<< HEAD
      console.log('order changed')
      this.orderTraker = 1
      this.orders = orders.map(this.formatOrder.bind(this))
=======

      var sortedOrders = orders.sort((a,b) => {
        return +b.id - +a.id
      })

      this.orderTraker = 1
      this.orders = sortedOrders.map(this.formatOrder.bind(this))
      this.ordersToDisplay = this.orders

      this.filterOrdersForDisplay()
>>>>>>> c2790677a47eae8f94fab098c9261e742a3931ad

      this.changeDetection.detectChanges()
    })

    this.dataService.orderCountChanged.subscribe(itemCount => {
      this.items.data = itemCount

      this.changeDetection.detectChanges()
    })
  }


  items: MatTableDataSource<any> = new MatTableDataSource<any>()
  orders = []
  ordersToDisplay = []
  displayedColumns = ["name", "count"];
  displayedOrderColumns = ["orderNumber", "first_name","last_name","telephone", "summary", "details"]

<<<<<<< HEAD
=======
  onDateSelected(event){
    this.currentlySelctedDate = event.value

    this.filterOrdersForDisplay()
  }

  filterOrdersForDisplay(){
    this.ordersToDisplay = this.orders.filter(order => {
      return order.date.toDateString() === this.currentlySelctedDate.toDateString() 
    })
  }

>>>>>>> c2790677a47eae8f94fab098c9261e742a3931ad

  formatOrder(order){

      var description = ""
      for(let item_order of order.itemOrders){
        description = description + item_order.item.name + " "
        description = description + item_order.amount+ " "
      }
      return {orderNumber: this.orderTraker++, first_name: order.first_name, last_name: order.last_name, telephone: order.telephone, summary: description, date: order.date}
  }



  openDialog(): void {
    const dialogRef = this.dialog.open(NewOrderComponent, {
      width: '100%',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  openEditDialog(): void {
    const dialogRef = this.dialog.open(EditOrderComponent, {
      width: '100%',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}
