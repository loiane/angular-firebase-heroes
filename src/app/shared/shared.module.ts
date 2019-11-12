import { AppMaterialModule } from './modules/app-material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlaceholderComponent } from './components/placeholder/placeholder.component';

@NgModule({
  declarations: [PlaceholderComponent],
  imports: [
    CommonModule,
    AppMaterialModule
  ],
  exports: [
    CommonModule,
    AppMaterialModule,
    PlaceholderComponent
  ]
})
export class SharedModule { }
