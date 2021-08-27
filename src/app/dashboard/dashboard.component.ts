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
import {EditOrderComponent} from "../edit-order/edit-order.component";
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
  all_orders: MatTableDataSource<any> = new MatTableDataSource<any>();
  orderItemCountsList = []
  ordersByDate: MatTableDataSource<any> = new MatTableDataSource<any>();
  orderItemCounts: MatTableDataSource<any> = new MatTableDataSource<any>();
  displayedColumns = ["name", "type", "amount", "sliced_amount"];
  displayedOrderColumns = ["first_name","last_name","telephone", "summary", "total", "details"]
  displayedAllOrderColumns = ["first_name","last_name","telephone", "summary", "total",  "date", "details"]
  orderDateFooterColumnsToDisplay = ["total"]
  currentlySelctedDate: Date
  dateObservable: Subject<Date> = new Subject<Date>();
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


  applyFilter(): void {
    let filterValue = this.searchText;
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.all_orders.filter = filterValue;
    this.orderItemCounts.filter = filterValue;
    this.ordersByDate.filter = filterValue;
    this.total_for_date = this.calculateTotal(this.ordersByDate);
  }

  constructor(private datePipe: DatePipe,
              private itemsService: ItemsService,
              private ordersService: OrderService,
              private itemOrdersService: ItemOrdersService,
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
      this.all_orders = new MatTableDataSource(this.orders);
      this.ordersByDate = new MatTableDataSource(this.getOrdersForDate(this.currentlySelctedDate, this.orders));
      this.orderItemCounts = new MatTableDataSource(this.orderItemCountsList);
      this.applyFilter();
    });

    combineLatest(this.itemOrdersService.itemOrders, this.itemsService.items, this.dateObservable).pipe(map(([itemOrders, items, date]) => {
      const itemOrds = itemOrders.filter(itemOrder => {
        const selectedDate = new Date(date);
        const orderDate = itemOrder.date.toDate();
        selectedDate.setHours(0,0,0,0);
        orderDate.setHours(0,0,0,0);
        return orderDate.toDateString() === selectedDate.toDateString();
      }).map(itemOrder => {
        const it = items.find((item: Item) => item.id === itemOrder.item_id);
        return {
          name: it.name,
          type: it.item_type,
          combinedName: it.name,
          amount: itemOrder.amountTotal,
          sliced_amount: itemOrder.amountSliced
        };
      });
      const distinctItemNames = {};
      itemOrds.forEach(ord => {
        if (!distinctItemNames[ord.name]){
          distinctItemNames[ord.name] = ord;
        }else {
         distinctItemNames[ord.name].amount += ord.amount;
         distinctItemNames[ord.name].sliced_amount += ord.sliced_amount;
        }
      });
      const returnArray = [];
      for (const key of Object.keys(distinctItemNames)){
        returnArray.push(distinctItemNames[key]);
      }
      return returnArray;
    })).subscribe((itemOrders) => {
      this.orderItemCountsList = itemOrders;

      this.orderItemCounts = new MatTableDataSource(itemOrders);
      this.applyFilter();
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

    if (event.index === 1){
        // update orders by date when Orders for Date tab is clicked
        this.ordersByDate = new MatTableDataSource(this.getOrdersForDate(this.currentlySelctedDate, this.orders));
        this.applyFilter();
    }
  }


  onDateSelected(event): void{
    this.currentlySelctedDate = event.value;
    this.ordersByDate = new MatTableDataSource(this.getOrdersForDate(this.currentlySelctedDate, this.orders));
    this.dateObservable.next(this.currentlySelctedDate);
    this.applyFilter();
  }


  updateSearch(search: string): void{
    this.searchText = search;
    this.applyFilter();
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

  calculateTotal(source: MatTableDataSource<Order>): number{
    const data = source.filteredData;
    let total = 0;
    data.forEach((order) => total += order.total);
    return total;
  }

  openEditDialog(id: number): void {

    const dialogRef = this.dialog.open(EditOrderComponent, {
      width: '100%',
      height: '98%',
      data: {
       orderId: id
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }



  // one order summary no need for database

  orderSummary(order: Order): string{

    const itemOrders = this.itemOrdersService.itemOrdersList.filter((itemOrder: ItemOrder) => {
      return itemOrder.order_id === order.id;
    });
    itemOrders.sort((a, b) => {
      const item1 = this.itemsService.itemsList.find((it) => it.id === a.item_id);
      const item2 = this.itemsService.itemsList.find((it) => it.id === b.item_id);
      return ('' + item1.name).localeCompare(item2.name);
    });
    let summary = '';
    for (const [key, itemOrder] of itemOrders.entries()) {
      if (itemOrder.amountTotal > 0) {
        const item = this.itemsService.itemsList.find((it) => it.id === itemOrder.item_id);
        summary = summary + item.name + ' ';
        summary = summary + itemOrder.amountTotal + ' ';
        if (key !== itemOrders.length - 1){
          summary = summary + ', ';
        }
      }
    }
    return summary;
  }


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
