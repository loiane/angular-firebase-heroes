import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { HeroesService } from '../../heroes.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {

  heroes$: Observable<any[]>;

  constructor(private service: HeroesService) { }

  ngOnInit() {
    // this.heroes$ = this.service.getHeroes();
  }

  trackByFn(index: any) {
    return index;
  }

}
