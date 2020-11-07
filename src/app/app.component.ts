import { Component, OnInit } from '@angular/core';
import { Food } from './food';
import { FoodService } from './food.service';





@Component({
  selector: 'app-root',
  // templateUrl = './app.component.html',
  template:
  `<h1>{{title}}</h1>
  <h2>My Foods</h2>
  <ul class="foods">
    <li *ngFor="let food of foods"
      (click)="onSelect(food)"
      [class.selected]="food === selectedFood">
      <span class="badge">{{food.id}}</span> {{food.name}}
    </li>
  </ul>
  <food-detail [food]="selectedFood"></food-detail>`, 
  //styleUrls: ['./app.component.css']


  styles: [`
  .selected {
    background-color: #CFD8DC !important;
    color: white;
  }
  .foods {
    margin: 0 0 2em 0;
    list-style-type: none;
    padding: 0;
    width: 15em;
  }
  .foods li {
    cursor: pointer;
    position: relative;
    left: 0;
    background-color: #EEE;
    margin: .5em;
    padding: .3em 0;
    height: 1.6em;
    border-radius: 4px;
  }
  .foods li.selected:hover {
    background-color: #BBD8DC !important;
    color: white;
  }
  .foods li:hover {
    color: #607D8B;
    background-color: #DDD;
    left: .1em;
  }
  .foods .text {
    position: relative;
    top: -3px;
  }
  .foods .badge {
    display: inline-block;
    font-size: small;
    color: white;
    padding: 0.8em 0.7em 0 0.7em;
    background-color: #607D8B;
    line-height: 1em;
    position: relative;
    left: -1px;
    top: -4px;
    height: 1.8em;
    margin-right: .8em;
    border-radius: 4px 0 0 4px;
  }
`],
providers: [FoodService]
})

export class AppComponent implements OnInit {
  title = 'Tour of favourite foods lol';
  foods: Food[];

  selectedFood : Food;

  // The injector doesn't know yet how to create a FoodService
  // To teach the injector how to make a HeroService, add the following providers 
  // array property to the bottom of the component metadata in the @Component call. providers: [FoodService]
  constructor(private foodService : FoodService){}

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
