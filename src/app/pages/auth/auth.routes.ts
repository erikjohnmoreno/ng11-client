import { ModuleWithProviders } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthComponent } from "./auth.component";

export const routes: Routes = [
  {
    path: '',
    component: AuthComponent,
    children: [
     
    ]
  }
];

export const routing: ModuleWithProviders<any> = RouterModule.forChild(routes);