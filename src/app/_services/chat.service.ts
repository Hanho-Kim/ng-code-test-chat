import { Injectable } from '@angular/core';
import * as Utils from './utils';

import { BehaviorSubject, Observable} from 'rxjs';
import {uuid} from "./utils";
import { Message } from '../model/message.model';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  private subject = {
    onNewMessageAdded : new BehaviorSubject(undefined)
  };

  private DB : Array<any> = [];
  private previousDB : Array<any> = [
    {
      "id" : uuid(),
      "text" : "Hey there!",
      "timestamp" : -904000,
      "user" : "ME"
    },
    {
      "id" : uuid(),
      "text" : "Hello!",
      "timestamp" : -901000,
      "user" : "RYAN"
    },
    {
      "id" : uuid(),
      "text" : "What is your name",
      "timestamp" : -900000,
      "user" : "ME"
    },
    {
      "id" : uuid(),
      "text" : "Thanks, my name is RYAN",
      "timestamp" : -800000,
      "user" : "RYAN"
    },
    {
      "id" : uuid(),
      "text" : "What about you?",
      "timestamp" : -703000,
      "user" : "RYAN"
    },
    {
      "id" : uuid(),
      "text" : "I am A",
      "timestamp" : -701000,
      "user" : "ME"
    },
    {
      "id" : uuid(),
      "text" : "What is your hobby?",
      "timestamp" : -700000,
      "user" : "ME"
    },
    {
      "id" : uuid(),
      "text" : "hello?",
      "timestamp" : -70000,
      "user" : "ME"
    },
    {
      "id" : uuid(),
      "text" : "Are you still here?",
      "timestamp" : -50000,
      "user" : "ME"
    },
    {
      "id" : uuid(),
      "text" : "Sorry for late response!",
      "timestamp" : -10000,
      "user" : "RYAN"
    }];

  private _isPreviousDBLoaded: boolean = false;

  constructor() {
    this._autoSendIntervals();
  }

  send({text, user}){
    let messageObject: Message = {
      id : Utils.uuid(),
      timestamp : Date.now(),
      text, user
    }
    this.DB.push(messageObject);

    this.subject['onNewMessageAdded'].next(messageObject);
  }

  onNewMessageAdded(){
    return this.subject['onNewMessageAdded'].asObservable();
  }

  _autoSendIntervals(){

    let text = Utils.randomSentence();
    this.send({
      text, user : "RYAN"
    });

    setTimeout(()=>{
      this._autoSendIntervals();
    },10000);

  }

  loadPrevious(){
    if(this._isPreviousDBLoaded){
      return [];
    }
    this._isPreviousDBLoaded = true;

    let previousMessages = this.previousDB;
    let lastTimestamp = Date.now() - 600000;
    if(this.DB[0]){
      lastTimestamp = this.DB[0].timestamp;
    }

    let start = previousMessages.length - 1;
    for(;start >= 0;start--){
      previousMessages[start].timestamp = lastTimestamp + previousMessages[start].timestamp;
    }

    return previousMessages;
  }

}
