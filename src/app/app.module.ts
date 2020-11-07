import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule }   from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FoodsComponent } from './foods.component';
import { FoodDetailComponent } from './food-detail.component';
import { FormsModule }   from '@angular/forms'; // <-- NgModel lives here
import { DashboardComponent } from './dashboard.component';
import { FoodService } from './food.service';


@NgModule({
  declarations: [
    AppComponent, 
    FoodDetailComponent,
    FoodsComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule ,// <-- import the FormsModule before binding with [(ngModel)]
    RouterModule.forRoot([
      {
        path: 'foods',
        component: FoodsComponent
      },
      {
        path: 'dashboard',
        component: DashboardComponent
      },
      {
        path: 'detail/:id', // <-- dont think this has to be same name as the component it self, but guess we telling what ever paht name will link to that cmoponent
        component: FoodDetailComponent //The colon (:) in the path indicates that :id is a placeholder for a specific food id when navigating to the FoodDetailComponent.
      },
      {
        path: '', // when app starts we have a 4200 thats it, we want it to navigate to this dashboard page
        redirectTo: '/dashboard', // it goes through app component first then links to our dash
        pathMatch: 'full'
      },
    ])
  ],
  providers: [FoodService],
  bootstrap: [AppComponent]
})

// The Routes are an array of route definitions.

// This route definition has the following parts:

// Path: The router matches this route's path to the URL in the browser address bar (heroes).
// Component: The component that the router should create when navigating to this route (HeroesComponent).

export class AppModule { }
