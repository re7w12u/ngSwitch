import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

export class MissionModel{
  id:number;
  title:string;
  finished:boolean;
}


@Injectable()
export class MissionService {

  constructor() { }
   get(){

    let array:Array<MissionModel> = new Array<MissionModel>();
    array.push({id:1,title:'Mission 1',finished:true});
    array.push({id:2,title:'Mission 2',finished:false});
    array.push({id:3,title:'Mission 3',finished:true});
    array.push({id:4,title:'Mission 4',finished:false});
    array.push({id:5,title:'Mission 5',finished:true});

    return Observable.of(array);
  }

}
