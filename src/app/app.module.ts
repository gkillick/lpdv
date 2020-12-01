import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import {MatSelectModule} from '@angular/material/select';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ItemsComponent } from './items/items.component';
import { RoutingModule } from './router.module';
import {MatIconModule} from '@angular/material/icon';
import {MatTableModule} from '@angular/material/table';
import { AddItemComponent } from './add-item/add-item.component';
import {MatDialogModule} from '@angular/material/dialog';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { NewOrderComponent } from './new-order/new-order.component';
import { MatFormFieldModule } from "@angular/material/form-field";
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { EditOrderComponent } from './edit-order/edit-order.component';
import {EditItemComponent} from './edit-item/edit-item.component'
import {MatTabsModule} from '@angular/material/tabs';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import {FormsModule} from '@angular/forms'
import {HttpClientModule} from '@angular/common/http'






@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ItemsComponent,
    AddItemComponent,
    NewOrderComponent,
    EditOrderComponent,
    EditItemComponent,
    LoginComponent,
    RegisterComponent,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    RoutingModule,
    MatIconModule,
    MatMenuModule,
    CollapseModule.forRoot(),
    MatTableModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatInputModule,
    MatSelectModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatTabsModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
