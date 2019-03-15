import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BottomBarModule } from './bottom-bar/bottom-bar.module'

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { AppRoutingModule } from './app-routing.module';
import { Page404Module } from './page404/page404.module';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BottomBarModule,
    Page404Module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
