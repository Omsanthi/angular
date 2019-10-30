import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { ViewComponent } from './view-component/view.component';

@NgModule({
 imports: [
     CommonModule,
     BrowserModule
 ],
 declarations: [
 ],
exports: [ViewComponent]
})
export class ViewModule{}