import { Component } from '@angular/core';
import { AddGarageButtonComponent } from '../add-garage/add-garage-button/add-garage-button.component';

@Component({
  selector: 'app-empty',
  standalone: true,
  imports: [AddGarageButtonComponent],
  templateUrl: './empty.component.html',
  styleUrl: './empty.component.css'
})
export class EmptyScreenComponent {
  text: string = "אין מוסכים להצגה";
}
