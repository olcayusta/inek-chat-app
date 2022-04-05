import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  HostListener,
  Input,
  OnInit,
  QueryList,
  ViewChildren
} from '@angular/core';
import { Message } from '../../models/message';
import { MessageWrapperComponent } from '../message-wrapper/message-wrapper.component';
import { SocketService } from '../../services/socket.service';
import { BroadcastChannelService } from '../../services/broadcast-channel.service';
import { Title } from '@angular/platform-browser';
import { first, Subscription } from 'rxjs';

@Component({
  selector: 'app-messages-list',
  templateUrl: './messages-list.component.html',
  styleUrls: ['./messages-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MessagesListComponent implements OnInit, AfterViewInit {
  @Input() messages: Message[] = [];
  @ViewChildren('messageWrapperComponent')
  messageWrapperComponents!: QueryList<MessageWrapperComponent>;

  sub!: Subscription;

  @HostListener('document:visibilitychange')
  visibilitychange() {
    /*    if (document.visibilityState === 'hidden') {
      this.socketService.disconnect();
      this.listenBroadcastMessages();
    } else {
      this.socketService.reconnect();
      this.socketService.subject.subscribe(({ payload }) => {
        // FIXME: Mesaj eklenince avatar resmi gidip geliyormus hissi veriyor...
        this.messages.push(payload);

        this.broadcastChannelService.postMessage({
          payload
        });

        this.cdr.markForCheck();
        this.playSound();
      });
    }*/
  }

  // TODO: Add message to messages array
  @Input()
  set message(value: string) {}

  constructor(
    private elementRef: ElementRef<HTMLElement>,
    private socketService: SocketService,
    private broadcastChannelService: BroadcastChannelService,
    private cdr: ChangeDetectorRef,
    private title: Title
  ) {}

  async playSound() {
    const audio = new Audio('//localhost:4200/assets/audio.ogg');
    await audio.play();
  }

  watchMessage() {
    this.socketService.subject.subscribe(({ payload }) => {
      // FIXME: Mesaj eklenince avatar resmi gidip geliyormus hissi veriyor.
      this.messages.push(payload);

      this.broadcastChannelService.postMessage({
        payload
      });

      this.cdr.markForCheck();
      // this.playSound();
    });
  }

  listenBroadcastMessages() {
    this.sub = this.broadcastChannelService
      .onmessage()
      .pipe(first())
      .subscribe((value) => {
        console.log(value.data.payload?.text);
        this.title.setTitle(value.data.payload?.text);
        this.messages.push({
          id: 101,
          text: value.data.payload?.text,
          type: 'text',
          user: {
            id: 101,
            displayName: 'Aurora',
            picture:
              'https://lh3.googleusercontent.com/Jcbs8GJmw5bLovVCTYicOdnx7w9eVMldC--YGah9-VgKuaWsjhpyOC4NIEIfRnZ1Ophm28NvYohMjpXTwPU1UnSTRmoYgJA-65rLIL0=w286'
          }
        });
      });
  }

  unlistenBroadcastMessages() {
    this.sub.unsubscribe();
  }

  async ngOnInit(): Promise<void> {
    /*    if (document.visibilityState === 'visible') {
      this.socketService.joinRoom(this.socketService.activeRoom);
      this.watchMessage();
    } else {
      this.listenBroadcastMessages();
    }*/

    this.socketService.joinRoom(this.socketService.activeRoom);
    this.watchMessage();
  }

  private scrollToBottom() {
    this.elementRef.nativeElement.scrollIntoView({
      block: 'end'
    });
  }

  /**
   * Scroll to the bottom of the messages list
   */
  ngAfterViewInit(): void {
    this.scrollToBottom();

    this.messageWrapperComponents.changes.subscribe((_) => {
      this.scrollToBottom();
    });
  }
}
