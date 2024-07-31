import {
  Component,
  EventEmitter,
  Input,
  NgModule,
  Output,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgModel } from '@angular/forms';
import { IFood } from '../../../services/food.interface';
@Component({
  selector: 'app-search',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css',
})
export class SearchComponent {
  @Output() findFoods = new EventEmitter<{ searchTerm: string }>();
  searchTerm = '';

  handleSearch(e: KeyboardEvent) {
    if (e.key === 'Enter') {
      this.findFoods.emit({ searchTerm: this.searchTerm });
    }
  }
}
