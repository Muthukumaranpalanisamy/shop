import { ShopService } from './shop.service';
import { myroutes } from './router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { ListComponent } from './list/list.component';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    ListComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(myroutes),
    HttpModule
  ],
  providers: [ShopService],
  bootstrap: [AppComponent]
})
export class AppModule { }
