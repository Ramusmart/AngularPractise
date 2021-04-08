import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { CountriesModel } from './countries.model'
@Injectable({
    providedIn : "root"
})
export class TimeHelper{
    public getTime():Date{
        return new Date();
    }
    constructor(private http : HttpClient){}

    public getCountries():Observable<any>{
        return this.http.get<any>('https://restcountries.eu/rest/v2/all');
    }

}