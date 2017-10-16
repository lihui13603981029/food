import { NgModule } from '@angular/core';
import { OrderRoutingModule } from './order-routing.module';
import { OrderComponent } from './order.component';
import { OrderListComponent } from './order-list/order-list.component';
import { SharedModule } from './../../shared/shared.module';

@NgModule({
    imports:[
        OrderRoutingModule,
        SharedModule
    ],
    declarations:[
        OrderListComponent,
        OrderComponent
    ]
})

export class OrderModule {
    
}