import { Injectable } from '@angular/core';
import { IFood } from './food.interface';
@Injectable({
  providedIn: 'root',
})
export class FavoritesService {
  private storageKey = 'favoriteFoods';

  getFavorites(): IFood[] {
    const favorites = localStorage.getItem(this.storageKey);
    return favorites ? JSON.parse(favorites) : [];
  }

  addToFavorites(food: IFood): void {
    const favorites = this.getFavorites();
    if (!favorites.some((item) => item.id === food.id)) {
      favorites.push(food);
      localStorage.setItem(this.storageKey, JSON.stringify(favorites));
    }
  }
}
