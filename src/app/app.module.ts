import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProductComponent } from './product/product.component';
import { FooterComponent } from './footer/footer.component';
import {FormsModule} from "@angular/forms";
import { FormProductComponent } from './form-product/form-product.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { DetailsProductComponent } from './details-product/details-product.component';
import { TodoListComponent } from './todoList/todoList.component';
import{HttpClientModule}from'@angular/common/http'

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ProductComponent,
    FooterComponent,
    FormProductComponent,
    NotfoundComponent,
    DetailsProductComponent,
    TodoListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
