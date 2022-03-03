import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-notifications-icon',
  templateUrl: 'notifications_black_24dp.svg',
  styleUrls: ['./notifications-icon.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NotificationsIconComponent {}
