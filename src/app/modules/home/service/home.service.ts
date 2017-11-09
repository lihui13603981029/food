import { Injectable } from '@angular/core';
import { Http , Headers} from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class HomeService {

    private headers = new Headers({'Content-Type':'application/json'});
    private hostName = 'http://47.52.21.213:8080';

    constructor(
        private http: Http
    ){}
    
    //返回分类列表
   getDishTypes():Promise<DishType[]>{
        
    return  this.http.get(this.hostName +'/llz/enum/cuisine/list')
                            .toPromise()
                            .then(data => data.json())
                            .catch();
   }
    //返回分类下的所有菜
    getDishsForId(id:Number):Promise<Dish[]> {


    return  this.http.get(this.hostName+'/llz/dishes/dishesListBycuisineId/'+id ).toPromise()
                            .then(data => data.json())
                            .catch();
    }

    //登录
    getUserLogin(params:Object):Promise<any> {
    
        return    this.http.post('',params)
                            .toPromise()
                            .then()
                            .catch();
    }

    //注册接口
    registUser():Promise<any> {
        return   this.http.get('')
        .toPromise()
        .then(response => response)
        .catch();
    }
    
}

export class DishType {
    constructor(
        id:String,
        enumCode:String,
        enumName:String,
        updataTime:number
    ){}
}

export class Dish {
    constructor(
        id:String,
        cuisineId:String,
        title:String,
        describution:String,
        img:String,
        createTime:number,
        updataTime:number
    ){}
}
