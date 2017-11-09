import { NgModule } from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';
import { TestComponent } from './test.component';


/**
 * 懒加载模块
 */
const routes :Routes = [
    {
        path:"",
        loadChildren:'app/modules/home/home.module#HomeModule'

    },{
        path:'order',
        loadChildren:'app/modules/order/order.module#OrderModule'
    },{
        path:'mine',
        loadChildren:'app/modules/mine/mine.module#MineModule'

    }  
]

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})

export class AppRoutingModule {

}