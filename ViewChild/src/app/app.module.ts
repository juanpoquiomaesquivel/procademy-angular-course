import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DemoComponent } from './demo/demo.component';

@NgModule({
  declarations: [
    AppComponent,
    DemoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
/* Data Bingding 
https://www.youtube.com/watch?v=tPYGJM1-qkk&list=PL1BztTYDF-QNrtkvjkT6Wjc8es7QB4Gty&index=28&pp=iAQB - @ViewChild in Angular */