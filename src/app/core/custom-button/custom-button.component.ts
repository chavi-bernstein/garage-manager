import { Component, Input, Output, EventEmitter } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';

/**
 * CustomButtonComponent
 * 
 * This component renders a button with customizable text and an `onTap` event.
 * 
 * @Input text - The text to display on the button.
 * @Input disabled - Whether the button is disabled.
 * @Output onTap - Emits an event when the button is clicked.
 * 
 * Usage:
 * ```
 * <app-custom-button [text]="yourText" [disabled]="isDisabled" (onTap)="yourFunction()"></app-custom-button>
 * ```
 */
@Component({
  selector: 'app-custom-button',
  standalone: true,
  imports: [MatButtonModule, CommonModule],
  templateUrl: './custom-button.component.html',
  styleUrls: ['./custom-button.component.css']
})
export class CustomButtonComponent {
  /** Text to display on the button */
  @Input() text!: string;

  /** Whether the button is disabled */
  @Input() disabled: boolean = false;

  /** Event emitted when the button is clicked */
  @Output() onTap = new EventEmitter<void>();

  /** Should the button will be gradient */
  @Input() gradient: boolean = true;

  /**
   * Handles the button click event and emits the onTap event.
   */
  handleButtonClick(): void {
    if (!this.disabled) {
      this.onTap.emit();
    }
  }
}