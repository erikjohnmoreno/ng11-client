import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main.component';

export const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [

    ]
  }
];

export const routing: ModuleWithProviders<any> = RouterModule.forChild(routes);
