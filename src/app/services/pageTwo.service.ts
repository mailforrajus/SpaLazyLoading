import {  Injectable, inject } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable()

export class pageTwoService{
    constructor(private _http:HttpClient){}

    public getAllEmployeeDetails():any{
        return this._http.get(" http://localhost:3000/employees");
    }

}