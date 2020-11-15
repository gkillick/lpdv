import { Component, OnInit } from '@angular/core';
import { ɵBrowserDomAdapter } from '@angular/platform-browser';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { AddItemComponent } from '../add-item/add-item.component';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})
export class ItemsComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  items = [
    {name: "bread", type: "Baked good", price: "5.39" }
  ]
  displayedItemColumns = ["name", "type", "price"]

  openDialog(): void {
    const dialogRef = this.dialog.open(AddItemComponent, {
      width: '250px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  

}

