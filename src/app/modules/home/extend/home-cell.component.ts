import { Component,Input ,OnInit}  from '@angular/core';
import { DishType} from './../service/home.service';
import { Router,ActivatedRoute } from '@angular/router';

@Component({
    selector:'home-cell',
    templateUrl:'./home-cell.component.html',
    styleUrls:['./home-cell.component.css']
})

export class HomeCellComponent implements OnInit {
@Input()  dishType:DishType;
    constructor(){}
    ngOnInit () {
        
    }


}