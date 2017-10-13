import { NgModule } from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';
import { TestComponent } from './test.component';


const routes :Routes = [{
        path:'',
        redirectTo:'/home',
        pathMatch:'full'
    },{
        path:'**',
        component:TestComponent
    }
    
]


@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})

export class AppRoutingModule {

}