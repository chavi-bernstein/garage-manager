import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'app-custom-app-bar',
  standalone: true,
  imports: [MatToolbarModule],
  templateUrl: './custom-app-bar.component.html',
  styleUrl: './custom-app-bar.component.css'
})
export class CustomAppBarComponent {
  title: string = "Garages";
}
