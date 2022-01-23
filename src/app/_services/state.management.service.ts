import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Message } from '../model/message.model';

@Injectable({
  providedIn: 'root'
})
export class StateManagementService {

  public previousMessage$: BehaviorSubject<Message> = new BehaviorSubject<Message>(undefined);

  constructor() { }
}
