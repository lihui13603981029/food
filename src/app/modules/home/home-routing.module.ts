import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { HomeMenuComponent } from './home-menu/home-menu.component';
import { HomeDetailComponent } from './home-detail/home-detail.component';

const homeRoutes:Routes =[
            {
                path:'home',
                component:HomeComponent,
                children:[
                    {
                        path:'homeMenu',
                        component:HomeMenuComponent
                    },{
                        path:'homeDetail',
                        component:HomeDetailComponent
                    },{
                        path:'',
                        component:HomeDetailComponent
                        
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