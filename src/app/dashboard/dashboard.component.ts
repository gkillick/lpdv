import { ChangeDetectorRef, Component, ElementRef, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { Subject } from 'rxjs';
import { EditOrderComponent } from '../edit-order/edit-order.component';
import { Order } from '../models/order.model';
import { NewOrderComponent } from '../new-order/new-order.component';
import { DataService } from '../services/data.service';
import { NgZone } from '@angular/core';
import { ItemsService } from '../services/items.service';
import { OrderService } from '../services/order.service';

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
  displayedOrderColumns = ["orderNumber", "first_name","last_name","telephone", "summary", "total", "details"]
  currentlySelctedDate: Date
  dateForm: FormControl

  constructor(private itemsService: ItemsService, private ordersService: OrderService,public dialog: MatDialog, private dataService: DataService, private changeDetection: ChangeDetectorRef, private zone: NgZone ) { 

  }

  ngOnInit(): void {

    this.itemsService.fetchItems().subscribe()
    this.ordersService.getOrders().subscribe()

 
    this.currentlySelctedDate = new Date();
    this.currentlySelctedDate.setDate(new Date().getDate()+1);
 
    this.currentlySelctedDate.setHours(0,0,0,0);
    this.dateForm = new FormControl(this.currentlySelctedDate)
    this.getOrdersForCurrentlySelectedDate()

    this.ordersService.orderChangedSubject.subscribe(orders => {
      this.getOrdersForCurrentlySelectedDate()

      this.changeDetection.detectChanges()
    })
  }



  onDateSelected(event){
    this.currentlySelctedDate = event.value

    this.getOrdersForCurrentlySelectedDate()
  }

  getOrdersForCurrentlySelectedDate(){

      var orders = this.ordersService.orders

      var filteredOrders = orders.filter(order => {
        console.log(order.date)
        let selectedDate = new Date(this.currentlySelctedDate)
        let orderDate = new Date(order.date)
        selectedDate.setHours(0,0,0,0)
        orderDate.setHours(0,0,0,0)
        console.log("date below")
        console.log(orderDate)
        console.log(selectedDate)
        return orderDate.toDateString === selectedDate.toDateString
      })

      var sortedOrders = filteredOrders.sort((a,b) => {
        return +a.id - +b.id
      })

      this.orders = sortedOrders

      this.orderItemCountsList = []
      this.orderItemCounts.data = this.orderItemCountsList

      for(let item of this.itemsService.items){
        console.log(item)
        this.orderItemCountsList.push({id: item.id, name: item.name, amount: 0})
      }

      for(let order of this.orders){
        console.log("Here:")
        console.log(order)
        for(let itemOrder of order.itemOrders){
          for(let orderItemCount of this.orderItemCountsList){
            if(+itemOrder.item_id === +orderItemCount.id){
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

    console.log(id)

    var dialogRef
    this.zone.run(() => {
      
      dialogRef = this.dialog.open(EditOrderComponent, {
        width: '100%',
        data: {
          id: id
        }
      });
    })




    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
  //one order summary no need for database
  orderSummary(order: any){
    var itemOrders = order.itemOrders;
    itemOrders.sort((a,b) => {
      //not working
      return ('' + a.name).localeCompare(b.name);
    })

    var summary = "";
    for(let item_order of itemOrders){
      if(item_order.amount > 0){
          //const name = this.dataService.getItemById(item_order.item_id).name
          summary= summary+ name + " "
          summary= summary+ item_order.amount+ " "
      }
  }
  return summary;
  }

  // Create our number formatter.
formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
});


printPage(){
  const html: HTMLElement = document.getElementById('orderAmountTable')

  //this.dataService.sendDataToPrint(html.innerHTML)

}

}
