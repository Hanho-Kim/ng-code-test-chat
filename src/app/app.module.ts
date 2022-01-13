import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChatroomComponent } from './chatroom/chatroom.component';
import { MessageItemComponent } from './chatroom/message-item/message-item.component';
import { DatesPipe } from './_pipes/dates.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ChatroomComponent,
    MessageItemComponent,
    DatesPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
