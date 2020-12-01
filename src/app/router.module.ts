import { NgModule } from '@angular/core';
import {RouterModule, Routes, RoutesRecognized} from "@angular/router";
import { AddItemComponent } from './add-item/add-item.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ItemsComponent } from './items/items.component';
import {LoginComponent} from './login/login.component'
import {RegisterComponent} from './register/register.component'


const appRoutes: Routes = [

    {path: "", redirectTo: 'login', pathMatch: 'full'},
    {path: "login", component: LoginComponent},
    {path: "register", component: RegisterComponent},
    {path: "dashboard", component: DashboardComponent},
    {path: "items", component: ItemsComponent},
    {path: "items/addItem", component: AddItemComponent}

];
@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})

export class RoutingModule{

}