import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ɵBrowserDomAdapter } from '@angular/platform-browser';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { AddItemComponent } from '../add-item/add-item.component';
import { ItemsService } from '../services/items.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})
export class ItemsComponent implements OnInit {

  constructor(private itemService: ItemsService,public dialog: MatDialog, private changeDetection: ChangeDetectorRef) { }

  items = []

  ngOnInit(): void {


    this.items = this.itemService.getItems()

    this.itemService.itemChangedSubject.subscribe(items => {
      
      console.log(items)

      this.items = items

      this.changeDetection.detectChanges()
    })

  }

  displayedItemColumns = ["name", "item_type", "price"]

  openDialog(): void {
    const dialogRef = this.dialog.open(AddItemComponent, {
      width: '250px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  

}

