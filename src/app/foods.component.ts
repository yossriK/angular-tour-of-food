import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Food } from './food';
import { FoodService } from './food.service';





@Component({
  selector: 'my-foods',
  // templateUrl = './app.component.html',
  templateUrl: './foods.component.html',
  styleUrls: [ './foods.component.css' ],

providers: [FoodService]

})

export class FoodsComponent implements OnInit {
  title = 'Tour of favourite foods lol';
  foods: Food[];

  selectedFood : Food;

  // The injector doesn't know yet how to create a FoodService
  // To teach the injector how to make a HeroService, add the following providers 
  // array property to the bottom of the component metadata in the @Component call. providers: [FoodService]
  constructor(private router: Router,
    private foodService : FoodService){}

  ngOnInit(): void {
    this.getFoods();
  }

  onSelect(food: Food): void {
    this.selectedFood = food;
  }

  getFoods(): void {
    //this.foods = this.foodService.getFood();
    this.foodService.getFood().then(foodReturned => this.foods = foodReturned); // the call back function is passed in the 'then' here
  }

  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedFood.id]);
    // Note that you're passing a two-element link parameters array—a path and the route parameter—to the router.navigate() method, 
    // just as you did in the [routerLink] binding back in the DashboardComponent
  }

}




// How should the AppComponent acquire a runtime concrete HeroService instance?
// You could create a new instance of the HeroService with new like this:
// heroService = new HeroService(); // don't do this
// However, this option isn't ideal for the following reasons:
// The component has to know how to create a HeroService. 
// If you change the HeroService constructor, you must find and update every place you created
// the service. Patching code in multiple places is error prone and adds to the test burden.
// You create a service each time you use new. What if the service caches heroes and shares that 
// cache with others? You couldn't do that.
// With the AppComponent locked into a specific implementation of the HeroService, switching 
// implementations for different scenarios, such as operating offline
// or using different mocked versions for testing, would be difficult.
// instead inject the service in the constructor of the other service
