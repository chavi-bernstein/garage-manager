import { Component, Input } from '@angular/core';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-error-message',
  standalone: true,
  imports: [MatIcon],
  templateUrl: './error-message.component.html',
  styleUrl: './error-message.component.css'
})

export class ErrorMessageComponent {
  @Input() errorMessage: string | null = null;

}
