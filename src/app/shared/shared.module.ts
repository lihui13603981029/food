import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorComponent } from './error/error.component';
import { PlayviewComponent } from './playview/playview.component';

@NgModule({
    imports:[
        BrowserModule
    ],
    declarations:[
        ErrorComponent,
        PlayviewComponent
    ],
    exports:[
        ErrorComponent,
        PlayviewComponent
    ]
})
export class SharedModule {


}