import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-code-snippet-dialog',
  templateUrl: './code-snippet-dialog.component.html',
  styleUrls: ['./code-snippet-dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CodeSnippetDialogComponent implements OnInit {
  foods: Food[] = [
    {value: 'steak-0', viewValue: 'Auto Detect Type'},
    {value: 'pizza-1', viewValue: 'Plain Text'},
    {value: 'tacos-2', viewValue: 'HTML'},
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
