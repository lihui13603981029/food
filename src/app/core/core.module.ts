import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
    imports:[CommonModule],
    declarations:[NavbarComponent],
    providers:[],
    exports:[NavbarComponent]
})

export class CoreModule {


}