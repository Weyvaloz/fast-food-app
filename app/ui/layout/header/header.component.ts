import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { IMenuItem } from './header.interface';
import { RouterLink } from '@angular/router';
import { RouterLinkActive } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
  standalone: true,
  imports: [CommonModule, MatIconModule, RouterLink, RouterLinkActive],
})
export class HeaderComponent {
  menuItems: IMenuItem[] = [
    {
      path: '/',
      icon: 'home',
    },
    {
      path: '/sale',
      icon: 'percent',
    },
    {
      path: '/favorites',
      icon: 'favorite',
    },
    {
      path: '/profile',
      icon: 'person',
    },
  ];
}
