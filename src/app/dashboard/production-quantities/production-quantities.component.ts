import {Component, Input, OnInit} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";

@Component({
  selector: 'app-production-quantities',
  templateUrl: './production-quantities.component.html',
  styleUrls: ['./production-quantities.component.scss']
})
export class ProductionQuantitiesComponent implements OnInit {

  @Input() productionQuantitesData: MatTableDataSource<any>;

  displayedColumns = ["name", "type", "amount", "sliced_amount"];
  constructor() { }

  ngOnInit(): void {
  }

}
