import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateRestaurantComponent } from './component/create-restaurant/create-restaurant.component';
import { RestaurantListComponent } from './component/restaurant-list/restaurant-list.component';
import { RestaurantDetailsComponent } from './component/restaurant-details/restaurant-details.component';
import { UpdateRestaurantComponent } from './component/update-restaurant/update-restaurant.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateRestaurantComponent,
    RestaurantListComponent,
    RestaurantDetailsComponent,
    UpdateRestaurantComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
