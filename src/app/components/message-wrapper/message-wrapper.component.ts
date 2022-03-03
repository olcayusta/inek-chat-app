import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
  TemplateRef,
  ViewChild,
  ViewContainerRef
} from '@angular/core';
import { Message } from '../../models/message';
import { Overlay } from '@angular/cdk/overlay';
import { TemplatePortal } from '@angular/cdk/portal';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-message-wrapper',
  templateUrl: './message-wrapper.component.html',
  styleUrls: ['./message-wrapper.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MessageWrapperComponent implements OnInit {
  @Input() message!: Message;
  @Input() position!: string;

  @ViewChild('fullscreenImage') fullscreenImage!: TemplateRef<any>;

  viewerOpened = false;

  user = JSON.parse(localStorage.getItem('user') as string);

  constructor(private overlay: Overlay, private vcr: ViewContainerRef, private dialog: MatDialog) {}

  ngOnInit(): void {}

  openFullScreenImageViewer() {
/*    const overlay = this.overlay.create({
      positionStrategy: this.overlay.position().global()
    })
    const portal = new TemplatePortal(this.fullscreenImage, this.vcr);
    overlay.attach(portal);*/

    const dialog = this.dialog.open(this.fullscreenImage, {
      panelClass: 'lightbox-dialog-container',
      width: '100%',
      height: '100%',
      maxWidth: '100%',
      minWidth: '100%'
    });

  }
}
