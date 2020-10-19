import { ERROR_COMPONENT_TYPE } from '@angular/compiler';
import { Base } from './base';

export interface Serializer {
    fromJson(json: any): Base;
    toJson(base: Base): any;
}

export interface Parameters {
    key:String;
    values:object;
}

export class QueryOptions{

    constructor(paramsObject:Array<Parameters>){
        this.paramsObject = paramsObject;
    }

    private paramsObject:Array<Parameters>;

    public toQueryString():string {
        return Object
        .keys(this.paramsObject)
        .map(key => `${encodeURIComponent(this.paramsObject[key].key)}=${encodeURIComponent(this.paramsObject[key].values)}`)
        .join('&');
    }
}

export class Guid {
    public uuid():String {  
        var uuidValue = "", k, randomValue;  
        for (k = 0; k < 32;k++) {  
          randomValue = Math.random() * 16 | 0;  
        
          if (k == 8 || k == 12 || k == 16 || k == 20) {  
            uuidValue += "-"  
          }  
          uuidValue += (k == 12 ? 4 : (k == 16 ? (randomValue & 3 | 8) : randomValue)).toString(16);  
        }  
        return uuidValue;  
      }
}