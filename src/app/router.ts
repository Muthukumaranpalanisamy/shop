import { HomeComponent } from './home/home.component';
import { ListComponent } from './list/list.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { Routes } from '@angular/router'
export const myroutes:Routes=[
    {path:'login',component:LoginComponent},
    {path:'signup',component:SignupComponent},
    {path:'list',component:ListComponent},
    {path:'home',component:HomeComponent}

]