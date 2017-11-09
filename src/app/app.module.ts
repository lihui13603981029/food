import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TestComponent } from './test.component';

import { CoreModule } from './core/core.module';
import { AppRoutingModule } from './app-routing.module';

import { HomeModule } from  './modules/home/home.module';
import { OrderModule } from './modules/order/order.module';
import { MineModule } from './modules/mine/mine.module';

@NgModule({
  //存放组件模块
  declarations: [
    AppComponent,
    TestComponent
  ],
  //存放module模块
  imports: [
    BrowserModule,
    HomeModule,
    OrderModule,
    MineModule,
    CoreModule,
    AppRoutingModule
  ],
  //存放service模块
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

 }
