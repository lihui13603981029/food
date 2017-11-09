import { Component,OnInit }  from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';

@Component({
    templateUrl:'./mine-menu.component.html',
    styleUrls:['./mine-menu.component.css']
})

export class MineMenuComponent implements OnInit {

    constructor(
        private router: Router,
        private route: ActivatedRoute
    ){}

    ngOnInit():void {
       
    }

    //跳转到登录界面
    goLogin():void {
        this.router.navigate(['./login'],{relativeTo:this.route});
        
    }


}