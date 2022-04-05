import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { BehaviorSubject, first } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit {
  ngOnInit() {

/*    const subject = new BehaviorSubject({1: 'apple', 2: 'banana'});
    const observable = subject.asObservable();

    const sub = observable.pipe(
      first()
    ).subscribe((value) => {
      console.log(value)
    })

    console.log(sub.closed)*/

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
