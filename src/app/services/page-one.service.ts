import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable()

export class PageOneService{

constructor(private _httpClient:HttpClient){}

public getAllStudents():any{
    return this._httpClient.get("http://localhost:3000/students");
}

};