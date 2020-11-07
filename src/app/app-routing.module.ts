import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent }   from './dashboard.component';
import { FoodsComponent }      from './foods.component';
import { FoodDetailComponent }  from './food-detail.component';
const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard',  component: DashboardComponent },
  { path: 'detail/:id', component: FoodDetailComponent },
  { path: 'food',     component: FoodsComponent }
];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}

// It's a good idea to refactor the routing configuration into its own class. 
// The current RouterModule.forRoot() produces an Angular ModuleWithProviders, a class 
// dedicated to routing should be a routing module. For more information, see the Milestone 
// #2: The Routing Module section of the Routing & Navigation page.

// By convention, a routing module name contains the word "Routing" and aligns with the name 
// // of the module that declares the components navigated to.

// The Routing Module pulls the routes into a variable. The variable clarifies the routing module pattern in case you export the module in the future.
// The Routing Module adds RouterModule.forRoot(routes) to imports.
// The Routing Module adds RouterModule to exports so that the components in the companion module have access to Router declarables, such as RouterLink and RouterOutlet.
// There are no declarations. Declarations are the responsibility of the companion module.
// If you have guard services, the Routing Module adds module providers