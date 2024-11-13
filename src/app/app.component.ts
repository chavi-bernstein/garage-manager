import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MultiSelectComponent } from './features/multi-select/multi-select.component';
import {
  CustomButtonComponent

} from './core/custom-button/custom-button.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MultiSelectComponent, CustomButtonComponent,],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  buttonLabel :string= 'Click Me';

  onButtonTap() {
    console.log('Button was tapped!');
  }
}