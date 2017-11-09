import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { HomeMenuComponent } from './home-menu/home-menu.component';
import { HomeDetailComponent } from './home-detail/home-detail.component';
import { HomeListComponent } from './home-list/home-list.component';

const homeRoutes:Routes =[
            {
                path:'',
                component:HomeComponent,
                data:{title:"首页"},
                children:[
                   {
                        path:'homeDetail',
                        component:HomeDetailComponent
                    },{
                        path:'homeList',
                        component:HomeListComponent
                    },{
                        path:'',
                        component:HomeMenuComponent   
                    }
                ]
            }
]

@NgModule({
    imports:[RouterModule.forChild(homeRoutes)],
    exports:[RouterModule]
})


export class HomeRoutingModule {

}