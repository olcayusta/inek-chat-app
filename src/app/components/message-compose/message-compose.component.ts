import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  OnInit,
  Output
} from '@angular/core';
import { FormControl } from '@angular/forms';
import { SocketService } from '../../services/socket.service';
import { GifService } from '../../services/gif.service';
import { Observable, Subject } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { CodeSnippetDialogComponent } from '../../dialogs/code-snippet-dialog/code-snippet-dialog.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-message-compose',
  templateUrl: './message-compose.component.html',
  styleUrls: ['./message-compose.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MessageComposeComponent implements OnInit {
  messageControl = new FormControl(null);
  gifPopupOpened = false;

  giphies$!: Observable<any>;

  searchTerm$ = new Subject<string>();
  searchTerm!: string;

  rooomId!: number;

  @Output() message = new EventEmitter<string>();

  constructor(
    private socketService: SocketService,
    private gifService: GifService,
    private dialog: MatDialog,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.giphies$ = this.gifService.getTrendingGifs();

    this.activatedRoute.paramMap.subscribe((params) => {
      this.rooomId = Number(params.get('roomId'));
    });
  }

  sendMessage($event: Event): void {
    $event.preventDefault();
    this.socketService.send(this.messageControl.value, this.rooomId);
    this.message.emit(this.messageControl.value);
    this.messageControl.patchValue('');
  }

  onChange(value: string) {
    if (value.length < 3) return;
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
    });
  }
}
