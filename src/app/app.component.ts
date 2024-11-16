import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GaragesScreenComponent } from './features/garages/garages-screen/garages-screen.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, GaragesScreenComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {

}
