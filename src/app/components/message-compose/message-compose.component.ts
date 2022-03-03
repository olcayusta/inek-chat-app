import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { SocketService } from '../../services/socket.service';
import { GifService } from '../../services/gif.service';
import { Observable, Subject } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { CodeSnippetDialogComponent } from '../../dialogs/code-snippet-dialog/code-snippet-dialog.component';

@Component({
  selector: 'app-message-compose',
  templateUrl: './message-compose.component.html',
  styleUrls: ['./message-compose.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MessageComposeComponent implements OnInit {
  messageControl = new FormControl(null);
  gifPopupOpened = false;

  giphies$!: Observable<any>;

  searchTerm$ = new Subject<string>();
  searchTerm!: string;

  constructor(private socketService: SocketService, private gifService: GifService, private dialog: MatDialog) {}

  ngOnInit(): void {
    this.giphies$ = this.gifService.getTrendingGifs();
  }

  sendMessage($event: Event): void {
    $event.preventDefault();
    this.socketService.send(this.messageControl.value);
  }

  onChange(value: string) {
    if (value.length < 3) return;
    // @ts-ignore
    console.log(this.searchTerm);
    this.giphies$ = this.gifService.listAllGifsBySearchTerm(this.searchTerm);
  }

  outsideClicked() {
    this.gifPopupOpened = false;
  }

  openDialog() {
    this.dialog.open(CodeSnippetDialogComponent, {
      minWidth: 640,
      autoFocus: false
    })
  }
}
