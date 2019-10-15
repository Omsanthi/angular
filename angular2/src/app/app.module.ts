import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{AbcdModule} from '../abcd.module';
import{EfghModule} from '../efgh.module';
import{XyzModule} from '../xyz.module';


import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,AbcdModule,EfghModule,XyzModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
