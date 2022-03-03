import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Room } from '../models/room';

@Injectable({
  providedIn: 'root',
})
export class RoomService {
  constructor(private http: HttpClient) {}

  getAllRooms(): Observable<Room[]> {
    return this.http.get<Room[]>(`http://localhost:1234/rooms`);
  }

  getRoom(roomId: string | null): Observable<Room> {
    return this.http.get<Room>(`http://localhost:1234/rooms/${roomId}`);
  }

  searchRoom(searchTerm: string): Observable<Room[]> {
    return this.http.get<Room[]>(`http://localhost:1234/rooms/search/:searhTerm`);
  }
}
