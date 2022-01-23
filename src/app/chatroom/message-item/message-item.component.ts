import {AfterViewInit, Component, ElementRef, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Message } from 'src/app/model/message.model';
import { StateManagementService } from 'src/app/_services/state.management.service';
import { take } from 'rxjs/operators';

@Component({
  selector: 'message-item',
  templateUrl: './message-item.component.html',
  styleUrls: ['./message-item.component.scss']
})
export class MessageItemComponent implements OnInit, AfterViewInit, OnChanges {

  @Input() message: Message;
  currentChanges: Message;

  ngOnChanges(changes: SimpleChanges) {
    this.currentChanges = changes.message.currentValue;
  }

  constructor(
    private stateManagementService: StateManagementService,
    private elRef: ElementRef
  ) { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.stateManagementService.previousMessage$
    .pipe(take(1))
    .subscribe((response: Message) => {
      if(response != undefined) {
        if(this.currentChanges.user === response.user) {
          // Reset User If message was sent by same user.
          this.elRef.nativeElement.querySelector('.user').innerHTML = "";

          // Checking time while same user
          let currentTimestamp = this.elRef.nativeElement.querySelector('.timestamp');
          let previousTimestamp = this.elRef.nativeElement.previousSibling.querySelector('.timestamp');

          if(previousTimestamp != null && previousTimestamp.innerHTML == null || currentTimestamp.innerHTML == previousTimestamp.innerHTML) {
            this.elRef.nativeElement.previousSibling.querySelector('.timestamp').innerHTML = "";
          }
        }
      }
      this.stateManagementService.previousMessage$.next(this.currentChanges);
    });
  }
}
