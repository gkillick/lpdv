import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { MatDatepicker } from '@angular/material/datepicker';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { NewOrderComponent } from '../new-order/new-order.component';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  orderTraker = 1
  currentlySelctedDate: Date

  constructor(public dialog: MatDialog, private dataService: DataService, private changeDetection: ChangeDetectorRef ) { }


  ngOnInit(): void {
    this.orderTraker = 1
    this.items.data = this.dataService.orderCounts

    this.orders = this.dataService.orders.map(this.formatOrder.bind(this))

    this.dataService.orderChanged.subscribe(orders => {

      var sortedOrders = orders.sort((a,b) => {
        return +b.id - +a.id
      })

      console.log(orders)

      this.orderTraker = 1
      this.orders = sortedOrders.map(this.formatOrder.bind(this))

      this.changeDetection.detectChanges()
    })

    this.dataService.orderCountChanged.subscribe(itemCount => {
      this.items.data = itemCount

      this.changeDetection.detectChanges()
    })
  }

  items: MatTableDataSource<any> = new MatTableDataSource<any>()
  orders = []
  displayedColumns = ["name", "count"];
  displayedOrderColumns = ["orderNumber", "first_name","last_name","telephone", "summary", "details"]

  onDateSelected(event){

    this.currentlySelctedDate = event.value
    console.log(event.value)
  }


  formatOrder(order){

      var description = ""
      for(let item_order of order.itemOrders){
        description = description + item_order.item.name + " "
        description = description + item_order.amount+ " "
      }
      return {orderNumber: this.orderTraker++, first_name: order.first_name, last_name: order.last_name, telephone: order.telephone, summary: description}
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
