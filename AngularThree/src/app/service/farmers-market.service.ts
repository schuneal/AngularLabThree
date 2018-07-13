import { Injectable } from "@angular/core";

@Injectable({
    providedIn : 'root'
})
export class FarmerMarketService{
    myData : any[];
    constructor(){
        this.myData = [
            {_id: 1, farm : 'Farm One', produce : ['apple', 'banana']},
            {_id: 2, farm : 'Farm Two', produce : ['grapes', 'mango']},
            {_id: 3, farm : 'Farm Three', produce : ['orange', 'strawberry']}
        ]
    }
    getData(){
        return this.myData;
    }
}