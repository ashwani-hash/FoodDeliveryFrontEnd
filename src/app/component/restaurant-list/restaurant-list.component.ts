import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Restaurant } from '../../common/restaurant'
import { RestaurantService } from '../../services/restaurant.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-restaurant-list',
  templateUrl: './restaurant-list.component.html',
  styleUrls: ['./restaurant-list.component.css']
})
export class RestaurantListComponent implements OnInit {

  restaurants: Observable<Restaurant[]>;

  constructor(private restaurantService: RestaurantService, private router: Router) { }

  ngOnInit(): void {
        this.reloadData();
  }

   reloadData() {
    this.restaurants = this.restaurantService.getRestaurantsList();
  }

  deleteRestaurant(id: number) {
    this.restaurantService.deleteRestaurant(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

  restaurantDetails(id: number){
    this.router.navigate(['details', id]);
  }

}
