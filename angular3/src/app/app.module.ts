import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from 'src/components/card/card.component';
import { NavbarComponent } from 'src/components/navbar/navbar.component';
import { HeaderComponent } from 'src/components/header/header.component';

@NgModule({
  declarations: [
    AppComponent,CardComponent,NavbarComponent,HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
