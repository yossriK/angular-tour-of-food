import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  template: `
    <h1>{{title}}</h1>
    <nav>
    <a routerLink="/food">link to them foods</a>
    <a routerLink="/dashboard">Dashboard</a>
   </nav>
    <router-outlet></router-outlet>
  `
})
export class AppComponent {
  title = 'Tour of Foods';
}