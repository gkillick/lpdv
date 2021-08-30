import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DashboardServiceService {

  // filter text observable
  private filterText = new BehaviorSubject('');
  sharedFilterText = this.filterText.asObservable();


  // observable for two filters displayed
  private twoFiltersDisplayed = new BehaviorSubject(false);
  sharedTwoFiltersDisplayed = this.twoFiltersDisplayed.asObservable();

  // observable for active tab
  private activeTab = new BehaviorSubject('');
  sharedActiveTab = this.activeTab.asObservable();

  constructor() {
  }

  setFilterText(text: string): void {
    this.filterText.next(text);
  }

  setTwoFiltersDisplayed(selectedTab: boolean): void {
    this.twoFiltersDisplayed.next(selectedTab);
  }

  setActiveTab(val: string): void {
    this.activeTab.next(val);
  }

}
