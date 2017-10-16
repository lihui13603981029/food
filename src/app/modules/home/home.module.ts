import { NgModule } from '@angular/core';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent }    from './home.component';


import { HomeMenuComponent } from './home-menu/home-menu.component';
import { HomeDetailComponent } from './home-detail/home-detail.component';

import { SharedModule } from './../../shared/shared.module';
 
@NgModule({
    imports:[
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