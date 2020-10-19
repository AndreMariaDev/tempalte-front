import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Serializer , QueryOptions } from './serializer';
import { Base } from './base';

export class BaseService<T extends Base> {
    constructor(
        private httpClient: HttpClient,
        private url: string,
        private endpoint: string,
        private serializer: Serializer) {}
    
      public create(item: T): Observable<T> {
        debugger;
        console.log(`${this.url}/${this.endpoint}`);
        console.log(this.serializer.toJson(item));
        return this.httpClient
          .post<T>(`${this.url}/${this.endpoint}`, this.serializer.toJson(item))
          .pipe(map(data => this.serializer.fromJson(data) as T));
      }
    
      public update(item: T): Observable<T> {
            return this.httpClient
            .put<T>(`${this.url}/${this.endpoint}/${item.Id}`,
                this.serializer.toJson(item))
            .pipe(map(data => this.serializer.fromJson(data) as T));
      }

      public delete(id: String) {
        return this.httpClient
          .delete(`${this.url}/${this.endpoint}/${id}`);
      }
    
      public getByID(id: String): Observable<T> {
        return this.httpClient
          .get(`${this.url}/${this.endpoint}/${id}`)
          .pipe(map((data: any) => this.serializer.fromJson(data) as T));
      }
    
      public GetByFilter(queryOptions: QueryOptions): Observable<T[]> {
        
        if(queryOptions.toQueryString()){
          return this.httpClient
          .get(`${this.url}/${this.endpoint}?${queryOptions.toQueryString()}`)
          .pipe(map(res=>{
            return this.convertData(res);
          }));
        } else {
          return this.httpClient
          .get(`${this.url}/${this.endpoint}?${queryOptions.toQueryString()}`)
          .pipe(map((data: any) => this.convertData(data.items)));
        }

      }
    
      private convertData(data: any): T[] {
        return data.map(item => this.serializer.fromJson(item));
      }
}