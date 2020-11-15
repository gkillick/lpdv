import { NgModule } from '@angular/core';
import {RouterModule, Routes, RoutesRecognized} from "@angular/router";
import { AddItemComponent } from './add-item/add-item.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ItemsComponent } from './items/items.component';


const appRoutes: Routes = [

    {path: "", component: DashboardComponent},
    {path: "items", component: ItemsComponent},
    {path: "items/addItem", component: AddItemComponent}

];
@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})

export class RoutingModule{

}