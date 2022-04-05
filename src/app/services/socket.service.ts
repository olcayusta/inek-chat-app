import { Injectable } from '@angular/core';
import { webSocket, WebSocketSubject } from 'rxjs/webSocket';

@Injectable({
  providedIn: 'root'
})
export class SocketService {
  public subject: WebSocketSubject<{ event: string; payload: any }> = webSocket(
    'ws://localhost:1234'
  );

  activeRoom = 0;

  constructor() {
    // this.subject.subscribe();
  }

  disconnect() {
    this.subject.complete();
  }

  reconnect() {
    this.joinRoom(this.activeRoom);
  }

  get user() {
    return JSON.parse(<string>localStorage.getItem('user'));
  }

  joinRoom(roomId: number) {
    this.subject.subscribe();
    this.subject.next({
      event: 'join',
      payload: {
        roomId
      }
    });
  }

  send(message: string, roomId: number): void {
    this.subject.next({
      event: 'chat message',
      payload: {
        user: this.user,
        text: message,
        roomId: roomId
      }
    });
  }
}
