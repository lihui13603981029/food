import { Component }  from '@angular/core';
import { Router } from '@angular/router';


@Component({
    selector:'home-menu',
    templateUrl:'./home-menu.component.html',
    styleUrls:['./home-menu.component.css']
})

export class HomeMenuComponent {

    age:string = "";
    constructor(
        private router: Router
    ){}
    
    
    public types = ["川菜","粤菜","鲁菜","浙菜","闽菜","湘菜","徽菜","潮州菜"];
    public foodLists = [{
                        title:"满汉全席",
                        imageUrl:"https://gss0.bdstatic.com/-4o3dSag_xI4khGkpoWK1HF6hhy/baike/c0%3Dbaike80%2C5%2C5%2C80%2C26/sign=283357c971cb0a46912f836b0a0a9d41/810a19d8bc3eb135173a0288ac1ea8d3fd1f4407.jpg",
                        introduce:"久负盛名的名宴“满汉全席”原来就是这位九省疆臣、三朝阁老、一代大儒阮元所创制的。"
                    },{
                        title:"叫花鸡",
                        imageUrl:"https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3651588332,349784617&fm=27&gp=0.jpg",
                        introduce:"常熟叫花鸡，又称煨鸡 ，是江苏省传统的地方名菜，属于苏菜系。"
                    },{
                        title:"叫花鸡",
                        imageUrl:"https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3651588332,349784617&fm=27&gp=0.jpg",
                        introduce:"常熟叫花鸡，又称煨鸡 ，是江苏省传统的地方名菜，属于苏菜系。"
                    },{
                        title:"叫花鸡",
                        imageUrl:"https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3651588332,349784617&fm=27&gp=0.jpg",
                        introduce:"常熟叫花鸡，又称煨鸡 ，是江苏省传统的地方名菜，属于苏菜系。"
                    },{
                        title:"叫花鸡",
                        imageUrl:"https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3651588332,349784617&fm=27&gp=0.jpg",
                        introduce:"常熟叫花鸡，又称煨鸡 ，是江苏省传统的地方名菜，属于苏菜系。"
                    }];
    
    
   navigateType(): void {
       this.router.navigate(['/home/homeList']);
       
    }
    goHomeDetail(item:any): void {
       this.router.navigate(["/home/homeDetail"]);
    }

}