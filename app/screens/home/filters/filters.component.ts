import { Component } from '@angular/core';
import { Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filters',
  standalone: true,
  imports: [],
  templateUrl: './filters.component.html',
  styleUrl: './filters.component.css',
})
export class FiltersComponent {
  @Output() filterFoods = new EventEmitter<{ type: string }>();

  handleFilter(type: string) {
    this.filterFoods.emit({ type });
  }
}
