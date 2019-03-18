import { ChatComponent } from './chat/chat.component';
import { MenuComponent } from './menu/menu.component';
import { BottomBarComponent } from './bottom-bar.component';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { CommonModule } from '@angular/common';

import { BottomBarRoutingModule } from './bottom-bar-routing.module';
import { EmailComponent } from './email/email.component';
import { TeamComponent } from './team/team.component';

@NgModule({
  declarations: [
    BottomBarComponent,
    EmailComponent,
    MenuComponent,
    ChatComponent,
    TeamComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    BottomBarRoutingModule
  ]
})
export class BottomBarModule { }
