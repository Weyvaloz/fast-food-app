import { Component, OnInit } from '@angular/core';
import { FoodService } from '../../services/food.service';
import { IFood } from '../../services/food.interface';
import { NgFor } from '@angular/common';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { FoodItemComponent } from './food-item/food-item.component';
import { SearchComponent } from './search/search.component';
import { FiltersComponent } from './filters/filters.component';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    NgFor,
    HttpClientModule,
    FoodItemComponent,
    SearchComponent,
    FiltersComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  providers: [FoodService],
})
export class HomeComponent implements OnInit {
  foods!: IFood[];
  filteredFoods!: IFood[];
  constructor(private foodService: FoodService) {}

  ngOnInit() {
    this.foodService.getAll().subscribe((data) => {
      this.foods = data;
      this.filteredFoods = data;
    });
  }
  onSearch(eventData: { searchTerm: string }) {
    this.filteredFoods = this.foods.filter((food) =>
      food.title.toLowerCase().includes(eventData.searchTerm.toLowerCase())
    );
  }
  onFilter(eventData: { type: string }) {
    this.filteredFoods = this.foods.filter(
      (food) => food.type === eventData.type
    );
  }
}
