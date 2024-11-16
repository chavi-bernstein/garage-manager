import { Component, Input } from '@angular/core';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-error-message',
  standalone: true,
  imports: [MatIcon],
  templateUrl: './error-message.component.html',
  styleUrl: './error-message.component.css'
})

/**
 * ErrorMessageComponent
 * 
 * This component displays an error message with an optional icon.
 * It is a standalone component that can be used wherever an error message display is required.
 * 
 * Usage:
 * ```html
 * <app-error-message [errorMessage]="'Your error message here'"></app-error-message>
 * ```
 */
export class ErrorMessageComponent {
  @Input() errorMessage: string | null = null;

}
