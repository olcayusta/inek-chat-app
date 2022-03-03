import {Injectable} from '@angular/core';
import {webSocket, WebSocketSubject} from 'rxjs/webSocket';

@Injectable({
  providedIn: 'root'
})
export class SocketService {
  public subject: WebSocketSubject<any> = webSocket('ws://localhost:1234');

  constructor() {
    this.subject.subscribe();
  }

  send(message: string): void {
    this.subject.next({
      event: 'message',
      payload: {
        text: message
      }
    });
  }
}
