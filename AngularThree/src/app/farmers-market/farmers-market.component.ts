import { Component } from "@angular/core";
import { FarmerMarketService } from "../service/farmers-market.service";
import { ActivatedRoute } from "@angular/router";

@Component({
    selector: 'app-farmers-market',
    templateUrl: './farmers-market.component.html'
})
export class FarmersMarketComponent {
    title = 'Farmers Market'
    myFarmsData: any[];
    mySelectedData: any[];

    constructor(private farmsDataService: FarmerMarketService, private route: ActivatedRoute) {
        route.params.subscribe(param => {
            this.myFarmsData = this.farmsDataService.getData();
            this.myFarmsData.forEach((data) => {
                if (data._id == param.id) {
                    this.mySelectedData = data;
                }
            });
        });
    }   
   
}