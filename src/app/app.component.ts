import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit {
  ngOnInit() {
/*    document.addEventListener('visibilitychange', function () {
      console.log(document.visibilityState);
      document.title = document.visibilityState === 'visible' ? 'Burdayim' : 'Degilim';
    });
    const broadcastChannel = new BroadcastChannel('gator_channel');

    broadcastChannel.postMessage('Logout please!');

    broadcastChannel.onmessage = (messageEvent) => {
      console.log(messageEvent.data);
    };*/
  }
}
