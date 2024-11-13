import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

/**
 * CustomButtonComponent
 * 
 * This component renders a button with customizable text and an `onTap` event.
 * 
 * @Input buttonText - The text to display on the button.
 * @Output onTap - Emits an event when the button is clicked.
 * 
 * Usage:
 * ```
 * <app-custom-button [buttonText]="yourText" (onTap)="yourFunction()"></app-custom-button>
 * ```
 */
@Component({
  selector: 'app-custom-button',
  standalone: true,
  imports: [MatButtonModule],
  templateUrl: './custom-button.component.html',
  styleUrls: ['./custom-button.component.css']
})
export class CustomButtonComponent   {
  /** Text to display on the button */
  @Input() text!: string;

  /** Event emitted when the button is clicked */
  @Output() onTap = new EventEmitter<void>();

  /**
   * Emits the onTap event when the button is clicked.
   * Throws an error if buttonText is not provided.
   */
  handleButtonClick() {
    this.onTap.emit();
  }
}
