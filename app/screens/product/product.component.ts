import { ActivatedRoute } from '@angular/router';
import { FoodService } from '../../services/food.service';
import { Component } from '@angular/core';
import { NgIf } from '@angular/common';
import { CommonModule } from '@angular/common';
import { IFood } from '../../services/food.interface';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { FavoritesService } from '../../services/favorites.service';
@Component({
  selector: 'app-product',
  standalone: true,
  imports: [NgIf, HttpClientModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css',
  providers: [FoodService],
})
export class ProductComponent {
  food!: IFood;
  constructor(
    private route: ActivatedRoute,
    private foodService: FoodService,
    private favoritesService: FavoritesService
  ) {}
  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.foodService.getFoodById(id).subscribe((data: IFood) => {
      this.food = data;
    });
  }
  addToFavorites(): void {
    if (this.food) {
      this.favoritesService.addToFavorites(this.food);
    }
  }
}
