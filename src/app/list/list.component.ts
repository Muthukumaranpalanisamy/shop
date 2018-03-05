import { ShopService } from './../shop.service';
import { Component, OnInit } from '@angular/core';
import { Shop } from '../shop';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  shop:Shop[];

  constructor(private shopService:ShopService) { }

  ngOnInit() {
    this.shopService.listAlldata().then(shop=>this.shop=shop);
  }

}
