import { Component, Input } from '@angular/core';
import { DeleteConfirmationDialogComponent } from '../delete-confirmation-dialog/delete-confirmation-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-delete-garage',
  standalone: true,
  imports: [DeleteConfirmationDialogComponent, MatIconModule],
  templateUrl: './delete-garage.component.html',
  styleUrl: './delete-garage.component.css'
})

export class DeleteGarageComponent {
  @Input() text!: string;

  constructor(public dialog: MatDialog) { }

  onDelete(item: string): void {
    const dialogRef = this.dialog.open(DeleteConfirmationDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        console.log("popooio");
        this.deleteItem(item);
      }
    });
  }

  deleteItem(item: string): void {
    console.log('Deleted item:', item);
  }
}
