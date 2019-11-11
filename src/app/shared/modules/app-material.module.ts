import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [],
  imports: [
    FlexLayoutModule,
    MatToolbarModule,
    MatButtonModule
  ],
  exports: [
    FlexLayoutModule,
    MatToolbarModule,
    MatButtonModule
  ]
})
export class AppMaterialModule { }
