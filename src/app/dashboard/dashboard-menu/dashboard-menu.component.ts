import { Component, OnInit } from '@angular/core';
import {NewOrderComponent} from "../../order/new-order/new-order.component";
import {DashboardServiceService} from "../dashboard-service.service";
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-dashboard-menu',
  templateUrl: './dashboard-menu.component.html',
  styleUrls: ['./dashboard-menu.component.scss']
})
export class DashboardMenuComponent implements OnInit {

  constructor(private dashboardService: DashboardServiceService, public dialog: MatDialog) { }
  twoDateSelectors = false;

  ngOnInit(): void {
    this.dashboardService.sharedTwoFiltersDisplayed.subscribe((val) => this.twoDateSelectors = val);
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

}
