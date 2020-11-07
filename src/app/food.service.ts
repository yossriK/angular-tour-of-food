import { Injectable } from '@angular/core';
import { Food } from './food';
import {FOODS} from './mock-food';

// The FoodService could get food data from anywhere—a web service, local storage, or a mock data source. Removing data access from the component means you can change your mind about
//  the implementation anytime, without touching the components that need hero data.

@Injectable()
export class FoodService {

    getFood(): Promise<Food[]>{
        return Promise.resolve(FOODS);
    }

    getFoodItem(id: number): Promise<Food>{
        return this.getFood()
             .then(foodsReturned => foodsReturned.find(foodItem => foodItem.id === id));
    }
}