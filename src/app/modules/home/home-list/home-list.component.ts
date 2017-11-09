import { Component,OnInit }  from '@angular/core';
import { Router,ActivatedRoute} from '@angular/router';
import { HomeService,DishType } from './../service/home.service';

@Component({
    selector:'home-list',
    templateUrl:'./home-list.component.html',
    styleUrls:['./home-list.component.css']
})

export class HomeListComponent implements OnInit {
    public dishTypes:DishType[];
    constructor(
        private router: ActivatedRoute,
        private route:Router,
        private homeService:HomeService
    ){}
    ngOnInit() {
        let id = this.router.snapshot.params["id"];
        this.homeService.getDishsForId(1).then(data => {
            this.dishTypes = data
            
        });
    }

        

}