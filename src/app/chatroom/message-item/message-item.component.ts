import {Component, OnInit } from '@angular/core';
import { Message } from 'src/app/model/message.model';
import { StateManagementService } from 'src/app/_services/state.management.service';

@Component({
  selector: 'message-item',
  templateUrl: './message-item.component.html',
  styleUrls: ['./message-item.component.scss']
})
export class MessageItemComponent implements OnInit {

  chatting: Array<Message> = [];

  constructor(
    private stateManagementService: StateManagementService
  ) { }

  ngOnInit(): void {
    this.stateManagementService.chatting$
      .subscribe((response: Message[]) => {
        this.chatting = response;
        let firstChat = this.chatting[0];

        for (let i = 1; i < this.chatting.length; i++) {
          if(firstChat.user == this.chatting[i].user || this.chatting[i].user == "") {
            let min1 = new Date(this.chatting[i-1].timestamp).getMinutes();
            let min2 = new Date(this.chatting[i].timestamp).getMinutes();
            if( min1 == min2 || min1 == undefined ) {
              this.chatting[i].user = "";
              delete(this.chatting[i-1].timestamp)
            }
          } else {
            firstChat = this.chatting[i];
          }
        }
      });
  }
}
