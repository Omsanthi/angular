import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { ViewModule } from './view/view.module';

@NgModule({
 imports: [
     CommonModule,BrowserModule,ViewModule
 ],
 declarations: [
     
 ],
//  exports: [AppComponent]
})
export class SubModule{}