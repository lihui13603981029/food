import { NgModule } from '@angular/core';
import { OrderRoutingModule } from './order-routing.module';
import { SharedModule } from './../../shared/shared.module';

import { OrderComponent } from './order.component';
import { OrderListComponent } from './order-list/order-list.component';
import { OrderCellComponent } from './order-cell/order-cell.component';

@NgModule({
    imports:[
        OrderRoutingModule,
        SharedModule
    ],
    declarations:[
        OrderListComponent,
        OrderComponent,
        OrderCellComponent
    ]
})

export class OrderModule {
    
}