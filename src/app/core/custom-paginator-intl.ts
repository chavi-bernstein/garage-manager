import { MatPaginatorIntl } from '@angular/material/paginator';

export class CustomPaginatorIntl extends MatPaginatorIntl {
  override itemsPerPageLabel = 'פריטים בעמוד';
}
