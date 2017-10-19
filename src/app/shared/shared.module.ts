import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule}  from '@angular/router';

import { ErrorComponent } from './error/error.component';
import { TabbarComponent } from './tabbar/tabbar.component';
import { PlayviewComponent } from './playview/playview.component';

@NgModule({
    imports:[
        RouterModule,
        BrowserModule
    ],
    declarations:[
        ErrorComponent,
        PlayviewComponent,
        TabbarComponent
    ],
    exports:[
        ErrorComponent,
        TabbarComponent,
        PlayviewComponent
    ]
})
export class SharedModule {


}