import { NgModule } from '@angular/core';
import { MineRoutingModule } from './mine-routing.module';
import { SharedModule } from './../../shared/shared.module';

import { MineComponent } from './mine.component';
import { MineMenuComponent } from './mine-menu/mine-menu.component';


@NgModule({
    imports:[
        SharedModule,
        MineRoutingModule
    ],
    declarations:[
        MineComponent,
        MineMenuComponent
    ]
})

export class MineModule {

    
}