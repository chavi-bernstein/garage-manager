import { MatPaginatorIntl } from '@angular/material/paginator';
import { Injectable } from '@angular/core';


@Injectable()
export class CustomPaginatorIntl extends MatPaginatorIntl {
  override itemsPerPageLabel = 'פריטים בעמוד';
}
