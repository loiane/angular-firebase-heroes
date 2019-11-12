import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-placeholder',
  templateUrl: './placeholder.component.html',
  styleUrls: ['./placeholder.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PlaceholderComponent implements OnInit {

  @Input() height: string;
  @Input() width: string;

  constructor() { }

  ngOnInit() {
  }

}
