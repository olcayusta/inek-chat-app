import { ChangeDetectionStrategy, Component, ElementRef, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-message-avatar',
  templateUrl: './message-avatar.component.html',
  styleUrls: ['./message-avatar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MessageAvatarComponent implements OnInit {
  @Input() avatar!: string;

  constructor(private elementRef: ElementRef) {}

  ngOnInit(): void {}

  loadedImage() {
    this.elementRef.nativeElement.setAttribute('loaded', '');
  }
}
