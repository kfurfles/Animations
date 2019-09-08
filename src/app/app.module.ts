import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { BottomBarModule } from './bottom-bar/bottom-bar.module';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { AppRoutingModule } from './app-routing.module';
import { Page404Module } from './page404/page404.module';
import { CircleLoaderModule } from './circle-loader/circle-loader.module';
import { MarvelLoaderModule } from './marvel-loader/marvel-loader.module';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    BottomBarModule,
    MarvelLoaderModule,
    Page404Module,
    CircleLoaderModule
  ],
  providers: [],
  exports: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
