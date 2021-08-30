import { ChangeDetectorRef, Component, NgZone, OnInit, ViewChild } from '@angular/core';
import { ɵBrowserDomAdapter } from '@angular/platform-browser';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {MatTableDataSource} from '@angular/material/table'
import { AddItemComponent } from './add-item/add-item.component';
import { ItemsService } from '../services/items.service';
import {Item} from '../models/item.model'
import { DataService } from '../services/data.service';
import { EditItemComponent } from './edit-item/edit-item.component';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})
export class ItemsComponent implements OnInit {

  errorMessage: string

  constructor(private itemService: ItemsService, public dialog: MatDialog, private changeDetection: ChangeDetectorRef, private zone: NgZone) { }

  dataSource: MatTableDataSource<Item> = new MatTableDataSource<Item>()

  ngOnInit(): void {

    this.itemService.items.subscribe((items: any[]) => {

      console.log(items)

      this.dataSource.data = items.sort((a,b) => {
        return +b.id - +a.id
      })

      this.changeDetection.detectChanges()
    })

  }

  displayedItemColumns = ["name", "item_type", "price", "edit"]

  openDialog(): void {
    const dialogRef = this.dialog.open(AddItemComponent, {
      width: '250px',
    });

    dialogRef.afterClosed().subscribe(result => {
      //refresh table
      this.errorMessage = result
    });
  }


  editItemDialog(item: Item): void {

    console.log(item)

    var dialogRef
    this.zone.run(() => {

      dialogRef = this.dialog.open(EditItemComponent, {
        width: '260px',
        data: {
          item: item
        }
      });
    })




    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
  @ViewChild(MatSort) sort: MatSort;

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }



}

