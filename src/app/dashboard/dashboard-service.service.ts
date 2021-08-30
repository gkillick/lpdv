import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DashboardServiceService {

  startDate: Date = new Date();

  // filter text observable
  private filterText = new BehaviorSubject('');
  sharedFilterText = this.filterText.asObservable();


  // observable for two filters displayed
  private twoFiltersDisplayed = new BehaviorSubject(false);
  sharedTwoFiltersDisplayed = this.twoFiltersDisplayed.asObservable();

  // observable for active tab
  private activeTab = new BehaviorSubject('Toutes Les Commandes');
  sharedActiveTab = this.activeTab.asObservable();

  // observable for selected date
  private selectedDate = new BehaviorSubject(this.startDate);
  sharedSelectedDate = this.selectedDate.asObservable();

  // observable for selected end date
  private endDateSelected = new BehaviorSubject(this.startDate);
  sharedEndDateSelected = this.endDateSelected.asObservable();

  constructor() {
    this.startDate.setDate((new Date().getDate() + 1));
    this.startDate.setHours(0,  0,  0, 0);
    this.selectedDate.next(this.startDate);
    this.endDateSelected.next(this.startDate);
  }

  setFilterText(text: string): void {
    this.filterText.next(text);
  }

  setTwoFiltersDisplayed(val: boolean): void {
    this.twoFiltersDisplayed.next(val);
  }

  setActiveTab(selectedTab: string): void {
    this.activeTab.next(selectedTab);
  }

  setSelectedDate(date: Date): void {
    this.selectedDate.next(date);
  }

  setSelectedEndDate(date: Date): void {
    this.endDateSelected.next(date);
  }

}
