import { NgModule } from '@angular/core';
import { AngularFirestoreModule } from '@angular/fire/firestore';

@NgModule({
  exports: [
    AngularFirestoreModule
  ]
})
export class AppFirebaseModule { }
