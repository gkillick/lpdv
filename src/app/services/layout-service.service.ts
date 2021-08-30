import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LayoutServiceService {

  // Mobile view state (if the window is less than 800px
  private mobileView = new BehaviorSubject(false);
  sharedMobileViewState = this.mobileView.asObservable();

  constructor() { }

  setLayoutState(layoutState): void {
  this.mobileView.next(layoutState);
  }
}

