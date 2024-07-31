import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IFood } from './food.interface';
import { Observable, of } from 'rxjs';
import { Routes } from '@angular/router';
@Injectable({
  providedIn: 'root',
})
export class FoodService {
  constructor(private http: HttpClient) {}
  private favorites: IFood[] = [];
  API_URL = 'http://localhost:3000/products';

  getAll() {
    return this.http.get<IFood[]>(this.API_URL);
  }
  getFoodById(id: any): Observable<any> {
    return this.http.get<any>(`${this.API_URL}/${id}`);
  }
  getFavorites(): Observable<IFood[]> {
    return of(this.favorites);
  }

  addToFavorites(food: IFood): void {
    if (!this.favorites.some((item) => item.id === food.id)) {
      this.favorites.push(food);
    }
  }
}
