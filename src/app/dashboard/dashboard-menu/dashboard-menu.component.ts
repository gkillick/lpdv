import { Component, OnInit } from '@angular/core';
import {NewOrderComponent} from "../../order/new-order/new-order.component";
import {DashboardServiceService} from "../dashboard-service.service";
import {MatDialog} from "@angular/material/dialog";
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-dashboard-menu',
  templateUrl: './dashboard-menu.component.html',
  styleUrls: ['./dashboard-menu.component.scss']
})
export class DashboardMenuComponent implements OnInit {

  constructor(private dashboardService: DashboardServiceService, public dialog: MatDialog) { }
  twoDateSelectors = false;
  activeTab = 'All Orders';

  dateForm: FormControl;
  dateEndForm: FormControl;


  ngOnInit(): void {
    this.dateEndForm = new FormControl(Date.now());
    this.dateForm = new FormControl(Date.now());
    this.dashboardService.sharedTwoFiltersDisplayed.subscribe((val) => this.twoDateSelectors = val);
    this.dashboardService.sharedActiveTab.subscribe((selectedTab) => this.activeTab = selectedTab);
    this.dashboardService.sharedSelectedDate.subscribe((date) => this.dateForm.setValue(date));
    this.dashboardService.sharedEndDateSelected.subscribe((date) => this.dateEndForm.setValue(date));

  }

  openDialog(): void {
    const dialogRef = this.dialog.open(NewOrderComponent, {
      width: '100%',
      height: '98%',
    });
  }

  updateSearch(search: string): void {
    this.dashboardService.setFilterText(search);
  }

  onDateSelected(event): void{
    this.dashboardService.setSelectedDate(event.value);
  }

  onEndDateSelected(event): void{
    this.dashboardService.setSelectedEndDate(event.value);
  }

}
