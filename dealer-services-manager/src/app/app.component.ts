import { Component } from '@angular/core';
import { Dealership } from './shared/models/Dealership';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'dealer-services-manager';
  Dealerships : Dealership[] = [
    new Dealership(1, 'Mac Haik', '12345 Bur Oak Drive', '77540', 'TX', 'Houston', '281-928-9222', 'generic@ymail.com'),
    new Dealership(2, 'Fredy Kia', '7554 New Drive', '66543', 'TX', 'Houston', '832-222-1111', 'placeholder@gmail.com')
  ];
}

