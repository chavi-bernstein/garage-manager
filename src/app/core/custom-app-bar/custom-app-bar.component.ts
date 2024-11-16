import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'app-custom-app-bar',
  standalone: true,
  imports: [MatToolbarModule],
  templateUrl: './custom-app-bar.component.html',
  styleUrl: './custom-app-bar.component.css'
})

/**
 * CustomAppBarComponent
 * 
 * This component displays a customizable application bar with a title.
 * It is a standalone component that uses Angular Material's Toolbar.
 * 
 * Usage:
 * ```html
 * <app-custom-app-bar></app-custom-app-bar>
 * ```
 */
export class CustomAppBarComponent {
  title: string = "מוסכים";
}
