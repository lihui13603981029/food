import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrderComponent } from  './order.component';
import { OrderListComponent } from './order-list/order-list.component';

const orderRoutes: Routes = [
    {
        path:'order',
        component:OrderComponent,
        data:{title:"订单"},
        children:[
            {
                path:'',
                component:OrderListComponent
            }
        ]
    }
]
@NgModule({
    imports:[RouterModule.forChild(orderRoutes)],
    exports:[RouterModule]
})

export class OrderRoutingModule {
    
}