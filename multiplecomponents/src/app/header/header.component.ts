import { Component, OnInit } from '@angular/core';
import { TimeHelper } from './services'
import { HttpErrorResponse } from '@angular/common/http'
import { CountriesModel } from './countries.model';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  private storage:string;
  public time:Date;
  response:CountriesModel[];
  
  // calling the service
  constructor(private timeToken : TimeHelper) { 
    this.storage = "this is the storage data";
  }

  ngOnInit() {
    this.time = this.timeToken.getTime();
    this.timeToken.getCountries().subscribe((posRes)=>{
      this.response = posRes;
    },(errRes:HttpErrorResponse)=>{
      console.log("Errored out");
    });
  }
  public getStorage():string{
    return this.storage;
  }
  public getTime():Date{
    return this.time;
  
  }



}
