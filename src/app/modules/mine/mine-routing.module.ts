import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MineComponent } from './mine.component';
import { MineMenuComponent } from './mine-menu/mine-menu.component';

const mineRoutes:Routes =[
        {
            path:'mine',
            component:MineComponent,
            children:[
                {
                    path:'',
                    component:MineMenuComponent
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