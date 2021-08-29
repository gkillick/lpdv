import { ChangeDetectorRef, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import {combineLatest, Observable, Subject} from 'rxjs';
import { DataService } from '../services/data.service';
import { NgZone } from '@angular/core';
import { ItemsService } from '../services/items.service';
import { OrderService } from '../services/order.service';
import { MatTabChangeEvent } from '@angular/material/tabs';
import { ItemOrdersService } from '../services/item-orders.service';
import { MatSort } from '@angular/material/sort';
import { DatePipe } from '@angular/common';
import { ItemOrder } from '../models/item_order.interface';
import { Order } from '../models/order.interface';
import { map, tap } from 'rxjs/operators';
import { Item } from '../models/item.interface';
import {NewOrderComponent} from "../new-order/new-order.component";


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  providers:[DatePipe]
})
export class DashboardComponent implements OnInit {

  orders: Order[]
  items: Item[]
  combinedNames: string;
  allOrders: MatTableDataSource<any> = new MatTableDataSource<any>();
  orderItemCountsList = []
  ordersByDate: MatTableDataSource<any> = new MatTableDataSource<any>();
  dateOrderColumns = ["first_name","last_name","telephone", "summary", "total", "details"];
  allOrderColumns = ["first_name","last_name","telephone", "summary", "total",  "date", "details"];
  orderDateFooterColumnsToDisplay = ["total"];
  currentlySelctedDate: Date
  dateObservable: Subject<Date> = new Subject<Date>();
  dateForm: FormControl
  activeTab: string = "All Orders"
  itemOrders: ItemOrder[] = []
  searchText: string = ""
  total_for_date = 0;
  currentlySelctedEndDate: Date;
  endDateObservable: Subject<Date>;
  twoDateSelectors = false;
  stringDate = ""
  filteredValues =
  {
    date: '',
    searchText: '',
  };



  constructor(private datePipe: DatePipe,
              private itemsService: ItemsService,
              private ordersService: OrderService,
              public dialog: MatDialog) {

  }

  ngOnInit(): void {
    this.currentlySelctedDate = new Date();
    this.currentlySelctedDate.setDate(new Date().getDate() + 1);
    this.currentlySelctedDate.setHours(0,  0,  0, 0);
    this.dateObservable.next(this.currentlySelctedDate);
    this.dateForm = new FormControl(this.currentlySelctedDate);

    this.ordersService.orders.subscribe(orders => {
      this.orders = orders;
      this.allOrders = new MatTableDataSource(this.orders);
      this.ordersByDate = new MatTableDataSource(this.getOrdersForDate(this.currentlySelctedDate, this.orders));
    });
  }

  getOrdersForDate(date: any, orders: Order[]): Order[] {
    const filteredOrders = orders.filter((order: Order) => {
      const selectedDate = new Date(date);
      const orderDate = order.date.toDate();
      selectedDate.setHours(0,0,0,0);
      orderDate.setHours(0,0,0,0);
      return orderDate.toDateString() === selectedDate.toDateString();
    });

    const sortedFilteredOrders = filteredOrders.sort((a,b) => {
      return +a.id - +b.id;
    });


    return sortedFilteredOrders;
  }


  onTabChange(event: MatTabChangeEvent): void {
    this.activeTab = event.tab.textLabel;

    if (event.index === 1) {
      // update orders by date when Orders for Date tab is clicked
      this.ordersByDate = new MatTableDataSource(this.getOrdersForDate(this.currentlySelctedDate, this.orders));
    }

    if (event.index === 3 || event.index === 4) {
      this.twoDateSelectors = true;
    }else{
      this.twoDateSelectors = false;
    }
  };




  onDateSelected(event): void{
    this.currentlySelctedDate = event.value;
    this.ordersByDate = new MatTableDataSource(this.getOrdersForDate(this.currentlySelctedDate, this.orders));
    this.dateObservable.next(this.currentlySelctedDate);
  }


  updateSearch(search: string): void{
    this.searchText = search.trim().toLowerCase();
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


  onEndDateSelected(event): void{
    this.currentlySelctedEndDate = event.value;
    this.endDateObservable.next(this.currentlySelctedDate);
  }


  // one order summary no need for database



/*
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
  */


}
