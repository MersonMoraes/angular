import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HelloComponent } from './hello.component';
import { EntitiesModule } from '../entities/entities.module';

@NgModule({
  declarations: [HelloComponent],
  imports: [
    CommonModule,
    EntitiesModule
  ],
  exports: [
    HelloComponent
  ]
})
export class HelloModule { }
export { HelloComponent };