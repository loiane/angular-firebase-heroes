import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { MatSnackBar } from '@angular/material/snack-bar';
import { map } from 'rxjs/operators';

import { Hero } from './models/hero';

@Injectable({
  providedIn: "root"
})
export class HeroesService {
  constructor(private db: AngularFirestore, private snackBar: MatSnackBar) {}

  getHeroes() {
    return this.db
      .collection<Hero>("heroes", ref =>
        ref.orderBy("default", "desc").orderBy("likes", "desc")
      )
      .snapshotChanges()
      .pipe(
        map(actions =>
          actions.map(action => {
            const data = action.payload.doc.data();
            return new Hero({ id: action.payload.doc.id, ...action.payload.doc.data() });
          })
        )
      );
  }
}
