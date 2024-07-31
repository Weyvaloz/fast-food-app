import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css',
  standalone: true,
  imports: [HeaderComponent, RouterOutlet],
})
export class LayoutComponent {}
