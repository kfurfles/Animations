import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BottomBarModule } from './bottom-bar/bottom-bar.module'

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { AppRoutingModule } from './app-routing.module';
import { Page404Component } from './page404/page404.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    Page404Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BottomBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
