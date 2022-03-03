import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-img-shadow',
  templateUrl: './img-shadow.component.html',
  styleUrls: ['./img-shadow.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ImgShadowComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
