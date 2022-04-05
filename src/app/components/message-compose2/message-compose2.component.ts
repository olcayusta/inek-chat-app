import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-message-compose2',
  templateUrl: './message-compose2.component.html',
  styleUrls: ['./message-compose2.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MessageCompose2Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
