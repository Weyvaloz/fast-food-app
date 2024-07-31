import { Component } from '@angular/core';
import { IFood } from '../../services/food.interface';
import { CommonModule } from '@angular/common';
import { RouterLinkWithHref, RouterModule } from '@angular/router';
import { RouterLink } from '@angular/router';
import { NgFor } from '@angular/common';
@Component({
  selector: 'app-sale',
  standalone: true,
  imports: [RouterModule, RouterLink, NgFor],
  templateUrl: './sale.component.html',
  styleUrl: './sale.component.css',
})
export class SaleComponent {
  saleItems: any = [
    {
      originalPrice: 270,
      id: 12,
      title: 'Chicken Burger',
      price: 200,
      type: 'burger',
      image:
        'https://static.vecteezy.com/system/resources/thumbnails/034/763/836/small_2x/ai-generated-fried-chicken-burger-free-png.png',
    },
    {
      originalPrice: 300,
      id: 20,
      title: 'Fish Taco',
      price: 160,
      type: 'taco',
      image:
        'https://d2bzx2vuetkzse.cloudfront.net/fit-in/0x450/unshoppable_producs/7c8ab5a6-e2ff-4410-b53a-47db56f0aea5.png',
    },
    {
      originalPrice: 400,
      id: 6,
      title: 'Grilled Chicken Salad',
      price: 250,
      type: 'chicken',
      image:
        'https://png.pngtree.com/png-vector/20240129/ourmid/pngtree-grilled-chicken-salad-png-generative-ai-png-image_11560082.png',
    },
  ];
}
