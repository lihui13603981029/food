import { Component,OnInit }  from '@angular/core';
import { Title } from "@angular/platform-browser";
import { Router, ActivatedRoute, NavigationEnd } from "@angular/router";


@Component({
    selector:'app-navbar',
    templateUrl:'./navbar.component.html',
    styleUrls:['./navbar.component.css']
})

export class NavbarComponent implements OnInit {

    public title:string = "FoodApp";
    public isBack = false;
    constructor(
        private titleService: Title,
        private router: Router
    ){
        //event  有7种状态，这个函数会出发7次
        router.events.subscribe(event => {
            
            //对event 的状态进行判断
            if (event instanceof NavigationEnd) {
            
              this.title = this.getTitle(router.routerState, router.routerState.root).join();
              titleService.setTitle(this.title);
            }
          });
    }
    getTitle(state, parent) {
        console.log(parent);
        var data = [];
        // if (parent && parent.snapshot.data && parent.snapshot.data.title) {
        //   data.push(parent.snapshot.data.title);
         
        // }
    
        if (state && parent) {
            console.log('路由');
        //   data.push(...this.getTitle(state, state.firstChild(parent)));
        }
    
        return data;
      }

    ngOnInit() {

    }

}