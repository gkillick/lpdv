import { ChangeDetectorRef, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
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
import { MatTabChangeEvent } from '@angular/material/tabs';
import { ItemOrdersService } from '../services/item-orders.service';
import { ItemOrder } from '../models/item_order.model';
import { MatSort } from '@angular/material/sort';
import { DatePipe } from '@angular/common';
import { Hash } from 'crypto';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  providers:[DatePipe]
})
export class DashboardComponent implements OnInit {

  itemQuantities: MatTableDataSource<any> = new MatTableDataSource<any>()
  orders = []
  all_orders: MatTableDataSource<any> = new MatTableDataSource<any>()
  orderItemCountsList = []
  ordersByDate: MatTableDataSource<any> = new MatTableDataSource<any>()
  orderItemCounts: MatTableDataSource<any> = new MatTableDataSource<any>()
  displayedColumns = ["name", "amount"];
  displayedOrderColumns = ["first_name","last_name","telephone", "summary", "total", "details"]
  displayedAllOrderColumns = ["first_name","last_name","telephone", "summary", "total",  "date", "details"]
  orderDateFooterColumnsToDisplay = ["total"]
  currentlySelctedDate: Date
  dateForm: FormControl
  activeTab: string = "All Orders"
  itemOrders: ItemOrder[] = []
  searchText: string = ""
  total_for_date = 0;
  stringDate = ""
  filteredValues =
  {
    date: '',
    searchText: '',
  };


  applyFilter() {
    var filterValue = this.searchText
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.all_orders.filter = filterValue;
    this.orderItemCounts.filter = filterValue;
    console.log('Here is the date:')
    this.stringDate = new Date(this.currentlySelctedDate.setHours(0,0,0,0) ).toISOString()
    this.filteredValues.date = new Date(this.currentlySelctedDate.setHours(0,0,0,0) ).toISOString()
    this.filteredValues.searchText = this.searchText
    this.ordersByDate.filter = JSON.stringify(this.filteredValues)


  }

  constructor(private datePipe: DatePipe, private itemsService: ItemsService, private ordersService: OrderService,private itemOrdersService: ItemOrdersService,public dialog: MatDialog, private dataService: DataService, private changeDetection: ChangeDetectorRef, private zone: NgZone ) { 

  }

  ngOnInit(): void {
    this.ordersByDate.filterPredicate = this.customFilterPredicate
    this.itemsService.fetchItems().subscribe()
    this.ordersService.getOrders().subscribe()
    this.itemOrdersService.getItemOrders().subscribe()

 
    this.currentlySelctedDate = new Date();
    this.currentlySelctedDate.setDate(new Date().getDate()+1);
 
    this.currentlySelctedDate.setHours(0,0,0,0);
    this.dateForm = new FormControl(this.currentlySelctedDate)
    this.getOrdersForCurrentlySelectedDate()

    this.itemOrdersService.itemOrderSubject.subscribe((itemOrders) => {
      this.itemOrders = itemOrders

      this.getOrdersForCurrentlySelectedDate()
      this.applyFilter()
    })

    this.ordersService.orderChangedSubject.subscribe(orders => {
      this.getOrdersForCurrentlySelectedDate()

      this.all_orders.data = orders
      this.ordersByDate.data = orders
      console.log(orders)
      
      this.changeDetection.detectChanges()
    })

  }
  onTabChange(event: MatTabChangeEvent) {
    this.activeTab = event.tab.textLabel;
  }


  onDateSelected(event){
    this.currentlySelctedDate = event.value
    console.log(event.value)

    this.getOrdersForCurrentlySelectedDate()

    this.changeDetection.detectChanges()
  }

  getOrdersForCurrentlySelectedDate(){
    

      var orders = this.ordersService.orders
      console.log(orders)

      var filteredOrders = orders.filter(order => {
        let selectedDate = new Date(this.currentlySelctedDate)
        let orderDate = new Date(order.date)
        selectedDate.setHours(0,0,0,0)
        orderDate.setHours(0,0,0,0)
        return orderDate.toDateString() === selectedDate.toDateString()
      })

      var sortedOrders = filteredOrders.sort((a,b) => {
        return +a.id - +b.id
      })

      this.orders = sortedOrders

      this.orderItemCountsList = []
      this.orderItemCounts.data = this.orderItemCountsList







      for(let item of this.itemsService.items){
        if(!item.sliced){
          this.orderItemCountsList.push({id: item.id, name: item['combined_name'], amount: 0})
        }
      }

      var filteredItemOrders = this.itemOrders.filter(iorder => {
        let selectedDate = new Date(this.currentlySelctedDate)
        let orderDate = new Date(iorder.date)
        selectedDate.setHours(0,0,0,0)
        orderDate.setHours(0,0,0,0)
        return orderDate.toDateString() === selectedDate.toDateString()
      })

      for(let itemOrder of filteredItemOrders){
        console.log('hi')
        for(let orderItemCount of this.orderItemCountsList){
          console.log(itemOrder.item_id)
          console.log(orderItemCount.id)
          if(itemOrder.combined_name === orderItemCount.name){
            console.log('added')
            orderItemCount.amount += itemOrder.amount
          }
        }
      }


    this.orderItemCounts.data = this.orderItemCountsList

    this.applyFilter()

  }

  updateSearch(search: string){
    this.searchText = search;
    this.applyFilter()
  }



  openDialog(): void {
    const dialogRef = this.dialog.open(NewOrderComponent, {
      width: '100%',
      height: '98%',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }


calculateTotal(source: MatTableDataSource<Order>){
  let data = source.filteredData
  var total = 0;
  data.forEach((order) => total += order.total)
  return total;
  }

  openEditDialog(id: number): void {

    console.log(id)

      
      var dialogRef = this.dialog.open(EditOrderComponent, {
        width: '100%',
        height: '98%',
        data: {
          id: id
        }
      });

      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');
      });
    }





  //one order summary no need for database
  
  orderSummary(order: any){
    if(order.itemOrders != null){
    var itemOrders = order.itemOrders;
    itemOrders.sort((a,b) => {
      //not working
      return ('' + a.itemName).localeCompare(b.itemName);
    })
  

    var summary = "";
    for(let item_order of itemOrders){
      if(item_order.amount > 0){
          summary= summary+ item_order.amount+ " "
          summary= summary+ item_order.itemName + ", "
      }
  }
}

  
  return summary;
  }
 


printPage(){
  const html: HTMLElement = document.getElementById('orderAmountTable')

  //this.dataService.sendDataToPrint(html.innerHTML)

}

@ViewChild('firstTableSort') public secondTableSort: MatSort;
@ViewChild('secondTableSort') public firstTableSort: MatSort;
@ViewChild('thirdTableSort') public thirdTableSort: MatSort;


ngAfterViewInit() {
  this.ordersByDate.sort = this.firstTableSort
  this.orderItemCounts.sort = this.thirdTableSort
  this.all_orders.sort = this.secondTableSort
}


//filter stuff
customFilterPredicate(data: any, filter: string): boolean {    
  const filterObject = JSON.parse(filter);
  const first_name = data.first_name.toString().trim().toLowerCase().indexOf(filterObject.searchText.toLowerCase()) !== -1;
  const last_name = data.last_name.toString().trim().toLowerCase().indexOf(filterObject.searchText.toLowerCase()) !== -1;
  return data.date == filterObject.date && (first_name || last_name)

}



}
