import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {RouterModule} from '@angular/router';
import {TopBarComponent} from './top-bar/top-bar.component';
import {LocationsListComponent} from './locations-list/locations-list.component';
import {LoginComponent} from './login/login.component';
import {ReactiveFormsModule} from '@angular/forms';
import {AddLocationComponent} from './add-location/add-location.component';
import {CategoriesListComponent } from './categories-list/categories-list.component';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    LocationsListComponent,
    LoginComponent,
    AddLocationComponent,
    CategoriesListComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule,
    RouterModule.forRoot([
      {path: '', component: LoginComponent},
      {path: 'user/loggedin', component: LocationsListComponent},
      {path: 'addLocation', component: AddLocationComponent},
      {path: 'goToCategories', component: CategoriesListComponent},
    ]),
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
