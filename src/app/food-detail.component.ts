import { Food } from './food';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';
import { FoodService } from './food.service';

//  swtich map<-- Import the switchMap operator to use later with the route parameters Observable.
                                    // as we observe which Id was selected
import { switchMap } from 'rxjs/operators';

@Component({

    selector: 'food-detail', // tag name of teh element that represents this component
    templateUrl: './food-detail.component.html',

})

export class FoodDetailComponent  implements OnInit {
    @Input() food: Food;
    
    constructor(
        private foodService: FoodService,
        private route: ActivatedRoute,
        private location: Location
      ) {}

      ngOnInit(): void {
        this.route.params.pipe(switchMap((params: Params) => this.foodService.getFoodItem(+params['id'])))
          .subscribe(hero => this.food = hero);
      }

      goBack(): void {  // <-- navigates backwared one step in the browser history stack using lication service that we injected
        this.location.back();  // going back too far could take users out of the app. can be prevented using CanDeactivateGaurd
      }
}


// You'll no longer receive the hero in a parent component property binding.
// The new HeroDetailComponent should take the id parameter from the params Observable in
// the ActivatedRoute service and use the HeroService to fetch the hero with that id.
// this will be supporting us adding teh path detail/id
