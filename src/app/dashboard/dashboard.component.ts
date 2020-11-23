import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { Subject } from 'rxjs';
import { EditOrderComponent } from '../edit-order/edit-order.component';
import { Order } from '../models/order.model';
import { NewOrderComponent } from '../new-order/new-order.component';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  itemQuantities: MatTableDataSource<any> = new MatTableDataSource<any>()
  orders = []
  orderItemCountsList = []
  orderItemCounts: MatTableDataSource<any> = new MatTableDataSource<any>()
  displayedColumns = ["name", "count"];
  displayedOrderColumns = ["orderNumber", "first_name","last_name","telephone", "summary", "details"]
  currentlySelctedDate: Date

  constructor(public dialog: MatDialog, private dataService: DataService, private changeDetection: ChangeDetectorRef ) { }

  ngOnInit(): void {
    this.currentlySelctedDate = new Date();
    this.currentlySelctedDate.setHours(0,0,0,0);

    this.itemQuantities.data = this.dataService.getItemQuantitiesForDate(this.currentlySelctedDate)

    this.orders = this.dataService.orders

    this.dataService.orderChanged.subscribe(orders => {

      var filteredOrders = orders.filter(order => {
        return order.date.toDateString() === this.currentlySelctedDate.toDateString()
      })

      var sortedOrders = filteredOrders.sort((a,b) => {
        return +a.orderNumber - +b.orderNumber
      })

      this.orders = sortedOrders


      this.orderItemCountsList = []
      this.orderItemCounts.data = this.orderItemCountsList

      for(let itemName of this.dataService.itemNames){
        this.orderItemCountsList.push({name: itemName, amount: 0})
      }

      for(let order of this.orders){
        for(let itemOrder of order.itemOrders){
          for(let orderItemCount of this.orderItemCountsList){
            if(itemOrder.item.name === orderItemCount.name){
              orderItemCount.amount += itemOrder.amount
            }
          }
        }
      }

      this.orderItemCounts.data = this.orderItemCountsList

      this.changeDetection.detectChanges()
    })
  }



  onDateSelected(event){
    this.currentlySelctedDate = event.value

    this.getOrdersForCurrentlySelectedDate()
  }

  getOrdersForCurrentlySelectedDate(){

      var orders = this.dataService.orders

      var filteredOrders = orders.filter(order => {
        return order.date.toDateString() === this.currentlySelctedDate.toDateString()
      })

      var sortedOrders = filteredOrders.sort((a,b) => {
        return +a.orderNumber - +b.orderNumber
      })

      this.orders = sortedOrders

      this.orderItemCountsList = []
      this.orderItemCounts.data = this.orderItemCountsList

      for(let itemName of this.dataService.itemNames){
        this.orderItemCountsList.push({name: itemName, amount: 0})
      }

      for(let order of this.orders){
        for(let itemOrder of order.itemOrders){
          for(let orderItemCount of this.orderItemCountsList){
            if(itemOrder.item.name === orderItemCount.name){
              orderItemCount.amount += itemOrder.amount
            }
          }
      }
    }

    this.orderItemCounts.data = this.orderItemCountsList

  }





  openDialog(): void {
    const dialogRef = this.dialog.open(NewOrderComponent, {
      width: '100%',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  openEditDialog(id: number): void {
    const dialogRef = this.dialog.open(EditOrderComponent, {
      width: '100%',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}
