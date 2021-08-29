import {Component, Input, OnChanges, OnInit} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {ItemOrdersService} from "../../services/item-orders.service";

@Component({
  selector: 'app-production-quantities',
  templateUrl: './production-quantities.component.html',
  styleUrls: ['./production-quantities.component.scss']
})
export class ProductionQuantitiesComponent implements OnInit, OnChanges{

  @Input() productionQuantitesData: MatTableDataSource<any>;
  @Input() filterString: string;
  @Input() forDate: boolean;
  @Input() dateStart: Date;
  @Input() dateEnd: Date;

  displayedColumns = ["name", "type", "amount", "sliced_amount"];
  constructor(private itemOrdersService: ItemOrdersService) { }

  ngOnInit(): void {
  }

  ngOnChanges(): void {
    this.productionQuantitesData.filter = this.filterString;


    const betweenDates = (date1: Date, date2: Date, date3: Date) => {
      return date1 >= date2 && date1 <= date3;
    };


    const forDate = (date1: Date, date2: Date, date3: Date) => {
      return date1.toDateString() === date2.toDateString();
    };

    if (this.forDate){
      this.itemOrdersService.formattedItemOrdersForProductionTable(forDate, this.dateStart, this.dateEnd).subscribe(itemOrders => {
        this.productionQuantitesData = new MatTableDataSource(itemOrders);
        this.productionQuantitesData.filter = this.filterString;
      });
    }else{
      this.itemOrdersService.formattedItemOrdersForProductionTable(betweenDates, this.dateStart, this.dateEnd).subscribe(itemOrders => {
        this.productionQuantitesData = new MatTableDataSource(itemOrders);
        this.productionQuantitesData.filter = this.filterString;
      });
    }
  }

}
