import { Component, OnInit } from '@angular/core';
//import { PagetwoService } from 'src/app/services/pagetwo.service';
import { HttpErrorResponse } from '@angular/common/http';
import { pageTwoService } from 'src/app/services/pageTwo.service';

@Component({
  selector: 'app-pagetwo',
  templateUrl: './pagetwo.component.html'
})
export class PagetwoComponent implements OnInit {

  private var_two:any;
  private employeeSubscribe:any;
  constructor(private _service:pageTwoService) { 
    
  };
  ngOnInit() {
    this.employeeSubscribe=this._service.getAllEmployeeDetails().subscribe(this._successCallBack, this._errorCallBack);
  }
public _successCallBack=(res):any=>{
  this.var_two=res;
}

public _errorCallBack=(err:HttpErrorResponse):any=>{
  if(err.error instanceof Error){
    console.log("client side errors");
  }else{
    console.log("server side errors");
  }


};

};
