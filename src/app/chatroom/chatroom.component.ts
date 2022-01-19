import {Component, OnInit, ViewChild} from '@angular/core';
import { Message } from '../model/message.model';
import {ChatService} from "../_services/chat.service";
import { StateManagementService } from '../_services/state.management.service';

@Component({
  selector: 'app-chatroom',
  templateUrl: './chatroom.component.html',
  styleUrls: ['./chatroom.component.scss']
})
export class ChatroomComponent implements OnInit {

  user: string = 'ME';
  messages: Array<Message> = [];

  @ViewChild('Input') input:any;

  constructor(
    private chat: ChatService,
    private stateManagementService: StateManagementService
  ) { }

  ngOnInit(): void {
    this.chat.onNewMessageAdded().subscribe((new_message)=>{
      this.onNewMessageAddedCallback(new_message);
    })
  }

  loadPreviousMessages(){
    const previousMessages = this.chat.loadPrevious();
    this.messages = previousMessages.concat(this.messages);
    this.stateManagementService.chatting$.next(this.messages);
  }

  send(){
    const text = this.input.nativeElement.value;
    this.input.nativeElement.value = '';
    this.chat.send({
      text : text,
      user : this.user
    });
  }

  onNewMessageAddedCallback(new_message){
    this.messages.push(new_message);
    this.stateManagementService.chatting$.next(this.messages);
  }
}
