import {Component} from "@angular/core";
@Component({
    selector : 'first-comp',
    templateUrl : "./firstcomponent.html"
})
export class firstComponent{
    private sub1:string;
    private sub2:string;
    private sub3:string;
    constructor(){
        this.sub1 = "angular";
        this.sub2 = "react";
        this.sub3 = "java";
    }
    public getSub1(){
        return this.sub1;
    }
    public getSub2(){
        return this.sub2;
    }
    public getSub3(){
        return this.sub3;
    }
}