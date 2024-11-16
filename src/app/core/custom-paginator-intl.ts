import { MatPaginatorIntl } from '@angular/material/paginator';
import { Injectable } from '@angular/core';

/**
 * CustomPaginatorIntl
 * 
 * This class customizes the labels used by Angular Material's paginator.
 * It extends MatPaginatorIntl to provide a custom label for "Items per page" in Hebrew.
 */
@Injectable()
export class CustomPaginatorIntl extends MatPaginatorIntl {
  override itemsPerPageLabel = 'פריטים בעמוד';
}
