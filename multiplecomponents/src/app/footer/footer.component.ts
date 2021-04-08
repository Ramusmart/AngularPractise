import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  private variable:string;

  constructor() {
    this.variable="this is just an example";
   }

  ngOnInit(): void {
  }
  public getVariable():string{
    return this.variable;
  }
}
