import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RestaurantListComponent } from './component/restaurant-list/restaurant-list.component';
import { CreateRestaurantComponent } from './component/create-restaurant/create-restaurant.component';
import { RestaurantDetailsComponent } from './component/restaurant-details/restaurant-details.component';

const routes: Routes = [{ path: '', redirectTo: 'restaurants', pathMatch: 'full' },
{ path: 'restaurants', component: RestaurantListComponent },
{ path: 'add-emp', component: CreateRestaurantComponent },
{ path: 'update-emp/:id', component: UpdateRestaurantComponent },
{ path: 'emp-detail/:id', component: RestaurantDetailsComponent },];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
