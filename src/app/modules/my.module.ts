import { NgModule } from "@angular/core";
import {  PagetwoComponent} from "../components/pagetwo/pagetwo.component"
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { HttpClientModule } from "@angular/common/http";
import { pageTwoService } from "../services/pageTwo.service";

//page two Routes section
export const appRoutesChild:Routes=[
    {path:"", component:PagetwoComponent}
];

@NgModule({
    declarations:[PagetwoComponent],
    imports:[CommonModule,RouterModule.forChild(appRoutesChild), HttpClientModule],
    providers:[pageTwoService],
    exports:[PagetwoComponent]
})

export class myModule{}