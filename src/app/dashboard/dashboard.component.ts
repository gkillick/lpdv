import {Component, OnInit} from '@angular/core';
import { FormControl } from '@angular/forms';
import {MatDialog } from '@angular/material/dialog';
import { MatTabChangeEvent } from '@angular/material/tabs';
import { DatePipe } from '@angular/common';
import {NewOrderComponent} from '../order/new-order/new-order.component';
import {DashboardServiceService} from './dashboard-service.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  providers: [DatePipe]
})
export class DashboardComponent implements OnInit {

  dateOrderColumns = ['first_name', 'last_name', 'telephone', 'summary', 'total', 'details'];
  allOrderColumns = ['first_name', 'last_name', 'telephone', 'summary', 'total',  'date', 'details'];
  currentlySelctedDate: Date;
  currentlySelctedEndDate: Date;
  dateForm: FormControl;
  dateEndForm: FormControl;
  activeTab = 'Toutes Les Commandes';
  searchText = '';
  twoDateSelectors = false;



  constructor(public dialog: MatDialog, private dashboardService: DashboardServiceService) {

  }

  ngOnInit(): void {
    this.dashboardService.sharedSelectedDate.subscribe((date) => this.currentlySelctedDate = date);
    this.dashboardService.sharedEndDateSelected.subscribe((date) => this.currentlySelctedEndDate = date);
    this.dashboardService.sharedFilterText.subscribe((text) => this.searchText = text);
    this.dateForm = new FormControl(this.currentlySelctedDate);
    this.dateEndForm = new FormControl(this.currentlySelctedEndDate);
  }


  onTabChange(event: MatTabChangeEvent): void {
    this.activeTab = event.tab.textLabel;
    this.dashboardService.setActiveTab(this.activeTab);

    if (event.index === 3 || event.index === 4) {
      this.twoDateSelectors = true;
      this.dashboardService.setTwoFiltersDisplayed(true);
    }else{
      this.twoDateSelectors = false;
      this.dashboardService.setTwoFiltersDisplayed(false);
    }
  }

  onDateSelected(event): void{
    this.currentlySelctedDate = event.value;
    this.dashboardService.setSelectedDate(event.value);
  }

  onEndDateSelected(event): void{
    this.currentlySelctedEndDate = event.value;
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
