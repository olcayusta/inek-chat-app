import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  Input,
  OnInit,
  QueryList,
  ViewChildren,
  ɵmarkDirty as markDirty,
} from '@angular/core';
import { Message } from '../../models/message';
import { MessageWrapperComponent } from '../message-wrapper/message-wrapper.component';
import { SocketService } from '../../services/socket.service';

@Component({
  selector: 'app-messages-list',
  templateUrl: './messages-list.component.html',
  styleUrls: ['./messages-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MessagesListComponent implements OnInit, AfterViewInit {
  @Input() messages: Message[] = [];
  @ViewChildren('messageWrapperComponent')
  items!: QueryList<MessageWrapperComponent>;

  constructor(private elRef: ElementRef<HTMLElement>, private socketService: SocketService) {}

  ngOnInit(): void {
    this.socketService.subject.subscribe(({ payload }) => {
      this.messages.push(payload);
      console.log(payload);
      markDirty(this);
    });
  }

  /**
   * Scroll to the bottom of the messages list
   */
  ngAfterViewInit(): void {
    this.scrollToBottom();

    this.items.changes.subscribe((_) => {
      this.scrollToBottom();
    });
  }

  scrollToBottom(): void {
    this.elRef.nativeElement.scrollIntoView({
      block: 'end',
      behavior: 'smooth',
    });
  }
}
