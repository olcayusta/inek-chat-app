import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BroadcastChannelService {
  private bc!: BroadcastChannel;

  constructor() {
    this.bc = new BroadcastChannel('message_channel');
  }

  postMessage(message: any) {
    this.bc.postMessage(message);
  }

  onmessage(): Observable<MessageEvent> {
    return new Observable((subscriber) => {
      this.bc.onmessage = (messageEvent) => {
        subscriber.next(messageEvent);
      };
      this.bc.onmessageerror = (messageEvent) => {
        subscriber.error(messageEvent);
      };
      // return () => this.bc.close();
    });
  }
}
