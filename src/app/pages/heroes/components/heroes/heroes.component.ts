import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {

  heroes$: Observable<any[]>;

  constructor() { }

  ngOnInit() {
  }

  trackByFn(index: any) {
    return index;
  }

}
