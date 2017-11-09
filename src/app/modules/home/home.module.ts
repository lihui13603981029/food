import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent }    from './home.component';
import { HttpModule } from '@angular/http';
import { HomeMenuComponent } from './home-menu/home-menu.component';
import { HomeDetailComponent } from './home-detail/home-detail.component';
import { HomeListComponent } from './home-list/home-list.component';
import { HomeCellComponent } from './extend/home-cell.component';
import { SharedModule } from './../../shared/shared.module';

// import { angular } from "angular";
// import {ngInfiniteScroll} from 'ng-infinite-scroll';

import { HomeService } from './service/home.service';

// const MODULE_NAME = 'food';
// angular.module(MODULE_NAME, [ngInfiniteScroll]);
// export default MODULE_NAME;
@NgModule({
    imports:[
        CommonModule,
        HomeRoutingModule,
        SharedModule,
        HttpModule
       
    ],
    declarations:[
        HomeComponent,
        HomeMenuComponent,
        HomeDetailComponent,
        HomeListComponent,
        HomeCellComponent,
       
        
       
    ],
    providers:[HomeService]
})

export class HomeModule {

    
}