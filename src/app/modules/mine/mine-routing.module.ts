import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MineComponent } from './mine.component';
import { MineMenuComponent } from './mine-menu/mine-menu.component';
import { LoginComponent } from './login/login.component';
const mineRoutes:Routes =[
        {
            path:'mine',
            component:MineComponent,
            data:{title:"我的"},
            children:[
                {
                    path:'',
                    component:MineMenuComponent
                },{
                    path:'login',
                    component:LoginComponent
                }
            ]
        }
]

@NgModule({
    imports:[RouterModule.forChild(mineRoutes)],
    exports:[RouterModule]
})


export class MineRoutingModule {

}