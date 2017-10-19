import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TestComponent } from './test.component';

import { NavbarComponent } from './core/navbar/navbar.component';

import { AppRoutingModule } from './app-routing.module';

import { HomeModule } from  './modules/home/home.module';
import { OrderModule } from './modules/order/order.module';
import { MineModule } from './modules/mine/mine.module';






@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    HomeModule,
    OrderModule,
    MineModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

 }
