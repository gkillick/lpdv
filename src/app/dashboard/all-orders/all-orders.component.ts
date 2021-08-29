import {Component, Input, OnChanges, OnInit} from '@angular/core';
import {Order} from "../../models/order.interface";
import {ItemOrder} from "../../models/item_order.interface";
import {ItemOrdersService} from "../../services/item-orders.service";
import {ItemsService} from "../../services/items.service";
import {EditOrderComponent} from "../../edit-order/edit-order.component";
import {MatDialog} from "@angular/material/dialog";
import {MatTableDataSource} from "@angular/material/table";

@Component({
  selector: 'app-all-orders',
  templateUrl: './all-orders.component.html',
  styleUrls: ['./all-orders.component.scss']
})
export class AllOrdersComponent implements OnInit, OnChanges{

  @Input() allOrders: MatTableDataSource<any>;
  @Input() forDate: boolean;
  @Input() betweenDates;
  @Input() filterString: string;
  @Input() columns: string[];


  constructor(private itemOrdersService: ItemOrdersService,
              private itemsService: ItemsService,
              public dialog: MatDialog) {
  }

  ngOnInit(): void {
  }

  ngOnChanges(): void{
    console.log(this.filterString);
    this.allOrders.filter = this.filterString;

  }




  orderSummary(order: Order): string{

    const itemOrders = this.itemOrdersService.itemOrdersList.filter((itemOrder: ItemOrder) => {
      return itemOrder.order_id === order.id;
    });
    itemOrders.sort((a, b) => {
      const item1 = this.itemsService.itemsList.find((it) => it.id === a.item_id);
      const item2 = this.itemsService.itemsList.find((it) => it.id === b.item_id);
      return ('' + item1.name).localeCompare(item2.name);
    });
    let summary = '';
    for (const [key, itemOrder] of itemOrders.entries()) {
      if (itemOrder.amountTotal > 0) {
        const item = this.itemsService.itemsList.find((it) => it.id === itemOrder.item_id);
        summary = summary + item.name + ' ';
        summary = summary + itemOrder.amountTotal + ' ';
        if (key !== itemOrders.length - 1){
          summary = summary + ', ';
        }
      }
    }
    return summary;
  }

  openEditDialog(id: number): void {

    const dialogRef = this.dialog.open(EditOrderComponent, {
      width: '100%',
      height: '98%',
      data: {
        orderId: id
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }


  calculateTotal(source: MatTableDataSource<Order>): number{
    const data = source.filteredData;
    let total = 0;
    data.forEach((order) => total += order.total);
    return total;
  }
}
