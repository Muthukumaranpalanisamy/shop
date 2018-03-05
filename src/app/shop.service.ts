import { Shop } from './shop';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class ShopService {

  apiUrl="http://localhost:3000/api/karts";

  constructor(private http:Http) { }

  signup(shop:Shop):Promise<Shop>{
    return this.http.post(this.apiUrl,shop)
    .toPromise()
    .catch(this.handleError);
  }

  listAlldata():Promise<Shop[]>{
    return this.http.get(this.apiUrl)
    .toPromise().then(response=> response.json() as Shop)
    .catch(this.handleError);
}


  private handleError(error: any):Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }


}
