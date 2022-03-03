import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { MatCheckboxChange } from '@angular/material/checkbox';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  checkedChange($event: MatCheckboxChange): void {
    const checked = $event.checked;
    localStorage.setItem('isLoggedIn', String(true));
  }
}
