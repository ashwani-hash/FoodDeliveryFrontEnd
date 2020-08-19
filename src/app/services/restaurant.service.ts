import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {

  private url = 'http://localhost:8080/api/restaurants';

  constructor(private http: HttpClient) { }

  getRestaurant(id: number): Observable<any> {
    return this.http.get(`${this.url}/${id}`);
  }

  createRestaurant(restaurant: any): Observable<any> {
    return this.http.post(`${this.url}`, restaurant);
  }

  updateRestaurant(id: number, value: any): Observable<any> {
    return this.http.put(`${this.url}/${id}`, value);
  }

  deleteRestaurant(id: number): Observable<any> {
    return this.http.delete(`${this.url}/${id}`, { responseType: 'text' });
  }

  getRestaurantsList(): Observable<any> {
    return this.http.get(`${this.url}`);
  }
}
