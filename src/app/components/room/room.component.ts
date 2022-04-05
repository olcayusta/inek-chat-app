import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { RoomService } from '../../services/room.service';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Room } from '../../models/room';
import { SocketService } from '../../services/socket.service';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RoomComponent implements OnInit {
  room$!: Observable<Room>;

  testMsg!: string;

  constructor(
    private roomService: RoomService,
    private socketService: SocketService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.room$ = this.route.paramMap.pipe(
      tap((params) => {
        // this.socketService.joinRoom(Number(params.get('roomId')));
        this.socketService.activeRoom = Number(params.get('roomId'));
      }),
      switchMap((value) => {
        return this.roomService.getRoom(value.get('roomId'));
      })
    );
  }

  getMessage($event: string) {
    this.testMsg = $event;
  }
}
