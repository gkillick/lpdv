import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ɵBrowserDomAdapter } from '@angular/platform-browser';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {MatTableDataSource} from '@angular/material/table'
import { AddItemComponent } from '../add-item/add-item.component';
import { ItemsService } from '../services/items.service';
import {Item} from '../models/item.model'
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})
export class ItemsComponent implements OnInit {

  constructor(private dataService: DataService,private itemService: ItemsService,public dialog: MatDialog, private changeDetection: ChangeDetectorRef) { }

  dataSource: MatTableDataSource<Item> = new MatTableDataSource<Item>()

  ngOnInit(): void {

    this.dataSource.data = this.dataService.items


    this.dataService.itemsChanged.subscribe((items: Item[]) => {

      this.dataSource.data = items

      this.changeDetection.detectChanges()
    })

  }

  displayedItemColumns = ["name", "item_type", "price"]

  openDialog(): void {
    const dialogRef = this.dialog.open(AddItemComponent, {
      width: '250px',
    });

    dialogRef.afterClosed().subscribe(result => {
      //refresh table
    });
  }

}

