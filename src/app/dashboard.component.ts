import { Component, OnInit } from '@angular/core';
import { FoodService } from './food.service';
import { Food } from './food';


@Component({
  selector: 'my-dashboard',
  //template: '<h3>My Dashboard</h3>'
  templateUrl: './dashboard.component.html',  // <-- points to a new template file
})

export class DashboardComponent implements OnInit {

    foods: Food[];  // dont forget this will be binded to my html file, with the ng stuff

    constructor(private foodService : FoodService){}

    ngOnInit(): void {
          this.foodService.getFood().then(foodReturned => this.foods = foodReturned.slice(1,5)); // the call back function is passed in the 'then' here
      }

}