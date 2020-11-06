import { Component, Input  } from '@angular/core';
import { Food } from './food';



@Component({

    selector: 'food-detail', // tag name of teh element that represents this component
    template :
    `<div *ngIf="food">
    <h2>{{food.name}} details!</h2>
    <div><label>id: </label>{{food.id}}</div>
    <div>
        <label>name: </label>
        <input [(ngModel)]="food.name" placeholder="name"/>
    </div>
  </div>`

})

export class FoodDetailComponent {
    @Input() food: Food;
}

