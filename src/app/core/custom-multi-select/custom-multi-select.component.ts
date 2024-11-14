import { Component, Input } from '@angular/core';
import { MatCheckboxModule } from '@angular/material/checkbox';

/**
 * The MultiSelect component displays a list of items with checkboxes that can be selected.
 * When a checkbox is checked or unchecked, a function provided by the parent component is called.
 */
@Component({
  selector: 'app-custom-multi-select',
  standalone: true,
  imports: [MatCheckboxModule],
  templateUrl: './custom-multi-select.component.html',
  styleUrl: './custom-multi-select.component.css'
})
export class CustomMultiSelectComponent {
  /**
   * A list of items displayed with checkboxes.
   * @type {string[]}
   */
  @Input() items: string[] = [];

  /**
   * A function that is called when a checkbox is selected or deselected.
   * The function receives the item name (item) and the checkbox state (checked).
   * @type {(item: string, checked: boolean) => void}
   */
  @Input() toggleCheckboxFn!: (item: string, checked: boolean) => void;

  /**
   * Called when a checkbox is clicked.
   * Sends the item name and the checkbox state to the provided parent function.
   * @param {string} item - The name of the item in the checkbox.
   * @param {any} event - The event fired when the checkbox state changes (including the checkbox's checked status).
   */
  onCheckboxClick(item: string, event: any) {
    if (this.toggleCheckboxFn) {
      this.toggleCheckboxFn(item, event.checked);
    }
  }
}
