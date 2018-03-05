import { ShopService } from './../shop.service';
import { Component, OnInit } from '@angular/core';
import { Shop } from '../shop';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private shopService:ShopService) { }
  shop=new Shop();
  addDetails(shop:Shop){
    return this.shopService.signup(this.shop).then(shop=>this.shop=shop);
  }

  ngOnInit() {
  }

}
