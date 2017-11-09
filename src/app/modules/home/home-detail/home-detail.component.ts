import { Component,OnInit }  from '@angular/core';
import { HomeService,Dish } from './../service/home.service';
import { ActivatedRoute ,Router} from '@angular/router';

@Component({
    selector:'home-detail',
    templateUrl:'./home-detail.component.html',
    styleUrls:['./home-detail.component.css']
})

export class HomeDetailComponent implements OnInit{

    public dish:Dish;
    constructor(
        private route: Router,
        private router: ActivatedRoute
    ){}
    ngOnInit() {
        this.dish = {
            id:"1",
            cuisineId:"01",
            title:"满汉全席",
            describution:"久负盛名的名宴“满汉全席”原来就是这位九省疆臣、三朝阁老、一代大儒阮元所创制的。",
            img:"https://gss0.bdstatic.com/-4o3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike80%2C5%2C5%2C80%2C26/sign=283357c971cb0a46912f836b0a0a9d41/810a19d8bc3eb135173a0288ac1ea8d3fd1f4407.jpg",
        }
    }
    save() {

    }
    buy() {

    }
    

    
    
}