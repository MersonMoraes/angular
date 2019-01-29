import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HelloService } from './services/hello.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [
    HelloService
  ]
})
export class EntitiesModule { }
