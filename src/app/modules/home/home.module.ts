import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent }    from './home.component';


import { HomeMenuComponent } from './home-menu/home-menu.component';
import { HomeDetailComponent } from './home-detail/home-detail.component';

import { SharedModule } from './../../shared/shared.module';
 
@NgModule({
    imports:[
        BrowserModule,
        HomeRoutingModule,
        SharedModule
    ],
    declarations:[
        HomeComponent,
        HomeMenuComponent,
        HomeDetailComponent
    ]
})

export class HomeModule {

    
}