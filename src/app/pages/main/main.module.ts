import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MainComponent } from './main.component';
import { routing } from './main.routes';

@NgModule({
  declarations: [MainComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    routing
  ]
})
export class MainModule { }
