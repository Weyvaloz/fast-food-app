import { Component } from '@angular/core';
import { RouterLinkWithHref, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './ui/layout/layout.component';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  standalone: true,
  imports: [
    LayoutComponent,
    RouterOutlet,
    RouterLinkWithHref,
    HttpClientModule,
  ],
})
export class AppComponent {
  title = 'my-app';
}
