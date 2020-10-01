import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { Frame1Component } from './frame1/frame1.component';
import { Frame2Component } from './frame2/frame2.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    Frame1Component,
    Frame2Component,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
