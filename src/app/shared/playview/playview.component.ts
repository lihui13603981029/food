import { Component ,OnInit}  from '@angular/core';


@Component({
    selector:'app-playview',
    templateUrl:'./playview.component.html',
    styleUrls:['./playview.component.css']
})

export class PlayviewComponent implements OnInit{
    public  currentPic:number = 0;
    public currentBtn:number = 0;
    public  images:any[] = [
            {
                pageNum:0,
                pageUrl:"https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2078442988,1160883121&fm=200&gp=0.jpg"
            },{
                pageNum:1,
                pageUrl:"https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2395703078,549332696&fm=200&gp=0.jpg"
            },{
                pageNum:2,
                pageUrl:"https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1222101542,2275642246&fm=200&gp=0.jpg"
            }      
    ]
    constructor() {
         setInterval(() => {
                let id = (this.currentPic + 1) % 3;
               this.currentPic = id;
               this.currentBtn = id;
      },3000)
     }

    changebanner(id) {
           console.log(id)
          this.currentPic = id;
      }
   ngOnInit() { }

}