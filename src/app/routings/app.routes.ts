import {  PageOneComponent } from "../components/page-one/page-one.component";
import {  Routes, RouterModule } from "@angular/router";
import { ModuleWithProviders } from "@angular/compiler/src/core";


export const appRoutes:Routes=[
    {path:"", component:PageOneComponent},
    {path:"pageTwo", loadChildren:"../modules/my.module#myModule"}
];

export const lazyLoad:ModuleWithProviders=RouterModule.forRoot(appRoutes);