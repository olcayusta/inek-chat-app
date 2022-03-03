import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { RoomService } from '../../services/room.service';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Room } from '../../models/room';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RoomComponent implements OnInit {
  room$!: Observable<Room>;

  constructor(private roomService: RoomService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.room$ = this.route.paramMap.pipe(
      switchMap((value) => {
        return this.roomService.getRoom(value.get('roomId'));
      })
    );
  }
}
