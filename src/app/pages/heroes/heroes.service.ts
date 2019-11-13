import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { MatSnackBar } from '@angular/material/snack-bar';
import { map, tap } from 'rxjs/operators';

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
            const doc = action.payload.doc;
            return new Hero({ id: doc.id, ...doc.data() });
          })
        )
      );
  }
}
