import { Component, OnInit } from '@angular/core';
import { Restaurant } from '../../common/restaurant';
import { RestaurantService } from '../../services/restaurant.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-restaurant',
  templateUrl: './create-restaurant.component.html',
  styleUrls: ['./create-restaurant.component.css']
})
export class CreateRestaurantComponent implements OnInit {

  restaurant: Restaurant = new Restaurant();
  submitted = false;

  constructor(private restaurantService: RestaurantService, private router: Router) { }

  ngOnInit(): void {
  }

  newRestaurant(): void {
    this.submitted = false;
    this.restaurant = new Restaurant();
  }
  save() {
    this.restaurantService.createRestaurant(this.restaurant)
      .subscribe(data => console.log(data), error => console.log(error));
    this.restaurant = new Restaurant();
    this.gotoList();
  }
  onSubmit() {
    this.submitted = true;
    this.save();
  }
  gotoList() {
    this.router.navigate(['/restaurants']);
  }

}
