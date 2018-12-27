import { Component, OnInit } from '@angular/core';
import {  PageOneService} from "../../services/page-one.service";
import { HttpErrorResponse } from '@angular/common/http';
@Component({
  selector: 'app-page-one',
  templateUrl: './page-one.component.html'
})
export class PageOneComponent implements OnInit {

  private var_one:any;
  private studentSubscribe:any;
  constructor(private _studentService:PageOneService) { 
     };

  ngOnInit() {
    this.studentSubscribe=this._studentService.getAllStudents().subscribe(
                                 this._successCallBack, this._errorCallBack
    );
  };
public _successCallBack=(res):any=>{
          this.var_one=res;
}
 

public _errorCallBack=(err:HttpErrorResponse):any=>{
    if(err.error instanceof Error){
      console.log("client side errors");
    }else{
      console.log("server side errors");
    }
}


};
