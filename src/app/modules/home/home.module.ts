import { NgModule } from '@angular/core';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent }    from './home.component';
import { NavbarComponent } from  './../../core/navbar/navbar.component';

import { HomeMenuComponent } from './home-menu/home-menu.component';
import { HomeDetailComponent } from './home-detail/home-detail.component';
 
@NgModule({
    imports:[
        HomeRoutingModule
    ],
    declarations:[
        HomeComponent,
        HomeMenuComponent,
        HomeDetailComponent,
        NavbarComponent
    ]
})

export class HomeModule {

    
}