import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ServicesComponent } from './services/services.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HistoryComponent } from './history/history.component';
import { GalleryComponent } from './gallery/gallery.component';
import { HeaderComponent } from '../components/header/header.component';
import { NavComponent } from "../components/nav/nav.component";
import { FooterComponent } from '../components/footer/footer.component';
import { CommonModule } from '@angular/common';
import{RouterModule,Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const Routes=[{
  path:"",
  pathMatch:"full",
  component:LoginComponent
},
{
  path:"home",
  component:HomeComponent
},
{
  path:"about",
  component:AboutComponent
},
{
  path:"services",
  component:ServicesComponent
},
{
  path:"contact",
  component:ContactComponent
},
{
  path:"history",
  component:HistoryComponent
},
{
  path:"gallery",
  component:GalleryComponent
},
{
  path:"register",
  component:RegisterComponent
},
{
  path:"login",
  component:LoginComponent
}]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ServicesComponent,
    AboutComponent,
    ContactComponent,
    HistoryComponent,
    GalleryComponent,
    HeaderComponent,
    NavComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    RouterModule.forRoot(Routes,{useHash:true})
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
