import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MultiSelectComponent } from './features/multi-select/multi-select.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MultiSelectComponent,],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {

}
