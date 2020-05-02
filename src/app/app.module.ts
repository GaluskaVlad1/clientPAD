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
import { LocationsByCategoryComponent } from './locations-by-category/locations-by-category.component';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { RegisterComponent } from './register/register.component';

// @ts-ignore
// @ts-ignore
@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    LocationsListComponent,
    LoginComponent,
    AddLocationComponent,
    CategoriesListComponent,
    LocationsByCategoryComponent,
    RegisterComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: '', component: LoginComponent},
      {path: 'user/loggedin', component: LocationsListComponent},
      {path: 'addLocation', component: AddLocationComponent},
      {path: 'goToCategories', component: CategoriesListComponent},
      {path: 'category/:categoryId', component: LocationsByCategoryComponent},
      {path: 'register', component: RegisterComponent},
    ]),
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
