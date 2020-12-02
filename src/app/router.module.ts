import { NgModule } from '@angular/core';
import {RouterModule, Routes, RoutesRecognized} from "@angular/router";
import { AddItemComponent } from './add-item/add-item.component';
import { AuthGaurdService } from './auth-gaurd.service';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ItemsComponent } from './items/items.component';
import {LoginComponent} from './login/login.component'
import {RegisterComponent} from './register/register.component'


const appRoutes: Routes = [

    {path: "", redirectTo: 'login', pathMatch: 'full'},
    {path: "login", component: LoginComponent},
    {path: "register", component: RegisterComponent},
    {path: "dashboard", component: DashboardComponent, canActivate: [AuthGaurdService] },
    {path: "items", component: ItemsComponent, canActivate: [AuthGaurdService]},
    {path: "items/addItem", component: AddItemComponent, canActivate: [AuthGaurdService]}

];
@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})

export class RoutingModule{

}