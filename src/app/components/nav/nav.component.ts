import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { RoomService } from '../../services/room.service';
import { Room } from '../../models/room';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavComponent implements OnInit {
  rooms$!: Observable<Room[]>;

  constructor(private roomService: RoomService) {}

  ngOnInit(): void {
    this.rooms$ = this.roomService.getAllRooms();
  }
}
