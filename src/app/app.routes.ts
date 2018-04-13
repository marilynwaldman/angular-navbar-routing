


import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';


const appRoutes: Routes = [
  {path: '', component: AppComponent, children: [
      {path: '', component: NavbarComponent, children: [
          
      ]}
  ]},
];

export const routes = RouterModule.forRoot(appRoutes, {useHash: false});
 