import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Shop } from '../shop';
import { ShopService } from '../shop.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  emails:string;
  passwords:string;
  

  constructor(private router:Router,private shopService:ShopService) { }

  //shop:Shop[];
   login(){
    if(this.emails=='abc@gmail.com' && this.passwords=='123456'){
      this.router.navigate(['home']);
          }
          else{
            alert("Wrong username or password");
          }
   }
  ngOnInit() {
   // this.shopService.listAlldata().then(shop=>this.shop=shop);
  }

}
