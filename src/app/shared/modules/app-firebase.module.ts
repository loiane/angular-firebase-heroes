import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule, FirestoreSettingsToken } from '@angular/fire/firestore';

import { environment } from './../../../environments/environment.prod';

@NgModule({
  imports: [
    AngularFireModule.initializeApp(environment.firebase, 'angularexampleapp'),
    AngularFirestoreModule
  ],
  exports: [
    AngularFireModule,
    AngularFirestoreModule
  ],
  providers: [{provide: FirestoreSettingsToken, useValue: {}}]
})
export class AppFirebaseModule { }
