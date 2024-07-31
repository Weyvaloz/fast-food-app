import { Component } from '@angular/core';
import { IFood } from '../../../services/food.interface';
import { Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-food-item',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './food-item.component.html',
  styleUrl: './food-item.component.css',
})
export class FoodItemComponent {
  @Input() food!: IFood;
}
