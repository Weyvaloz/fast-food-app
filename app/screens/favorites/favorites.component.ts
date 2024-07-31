import { Component, OnInit } from '@angular/core';
import { FoodService } from '../../services/food.service';
import { IFood } from '../../services/food.interface';
import { RouterLink } from '@angular/router';
import { RouterLinkActive } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { NgFor, NgIf } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { FavoritesService } from '../../services/favorites.service';
@Component({
  selector: 'app-favorites',
  standalone: true,
  imports: [RouterLink, NgFor, RouterModule, NgIf],
  templateUrl: './favorites.component.html',
  styleUrl: './favorites.component.css',
})
export class FavoritesComponent implements OnInit {
  favoriteItems: IFood[] = [];

  constructor(private favoritesService: FavoritesService) {}

  ngOnInit(): void {
    this.favoriteItems = this.favoritesService.getFavorites();
  }
}
