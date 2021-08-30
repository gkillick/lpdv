import { BrowserModule } from '@angular/platform-browser';
import {LOCALE_ID, NgModule} from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import {MatSelectModule} from '@angular/material/select';
import {HTTP_INTERCEPTORS} from '@angular/common/http'

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ItemsComponent } from './items/items.component';
import { RoutingModule } from './router.module';
import {MatIconModule} from '@angular/material/icon';
import {MatTableModule} from '@angular/material/table';
import { AddItemComponent } from './items/add-item/add-item.component';
import {MatDialogModule} from '@angular/material/dialog';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { NewOrderComponent } from './order/new-order/new-order.component';
import { MatFormFieldModule } from "@angular/material/form-field";
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {EditItemComponent} from './items/edit-item/edit-item.component'
import {MatTabsModule} from '@angular/material/tabs';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import {FormsModule} from '@angular/forms'
import {HttpClientModule} from '@angular/common/http'
import {AuthInterceptorService} from './auth-interceptor.service'
import {MatSortModule} from '@angular/material/sort';
import { CapitalizePipe } from './pipes/capitalize.pipe';
import { SearchFilterPipe } from './pipes/search-filter.pipe';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore'
import { AngularFireAuthModule } from '@angular/fire/auth'
import { AngularFireStorageModule} from '@angular/fire/storage'

import { environment } from 'src/environments/environment';
import { EditOrderComponent } from './order/edit-order/edit-order.component';
import { OrderFormComponent } from './order/order-form/order-form.component';
import { ProductionQuantitiesComponent } from './dashboard/production-quantities/production-quantities.component';
import { AllOrdersComponent } from './dashboard/all-orders/all-orders.component';
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
import { DashboardMenuComponent } from './dashboard/dashboard-menu/dashboard-menu.component';
registerLocaleData(localeFr, 'fr');






@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ItemsComponent,
    AddItemComponent,
    NewOrderComponent,
    EditItemComponent,
    LoginComponent,
    RegisterComponent,
    CapitalizePipe,
    SearchFilterPipe,
    EditOrderComponent,
    OrderFormComponent,
    ProductionQuantitiesComponent,
    AllOrdersComponent,
    DashboardMenuComponent,
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
    HttpClientModule,
    MatSortModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireStorageModule
  ],
  providers: [
    {provide: LOCALE_ID, useValue: 'fr' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
