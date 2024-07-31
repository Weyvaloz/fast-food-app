import { Routes } from '@angular/router';
import { RouterLink } from '@angular/router';
import { HomeComponent } from './screens/home/home.component';
import { SaleComponent } from './screens/sale/sale.component';
import { FavoritesComponent } from './screens/favorites/favorites.component';
import { ProfileComponent } from './screens/profile/profile.component';
import { ProductComponent } from './screens/product/product.component';
export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'sale',
    component: SaleComponent,
  },
  {
    path: 'favorites',
    component: FavoritesComponent,
  },
  {
    path: 'profile',
    component: ProfileComponent,
  },
  {
    path: 'food/:id',
    component: ProductComponent,
  },
  { path: '**', redirectTo: '' },
];
