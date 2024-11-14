import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-delete-confirmation-dialog',
  standalone: true,
  imports: [],
  templateUrl: './delete-confirmation-dialog.component.html',
  styleUrl: './delete-confirmation-dialog.component.css'
})

export class DeleteConfirmationDialogComponent {
text:string="האם אתה בטוח שברצונך למחוק?"
cancel:string="ביטול"
confirm:string="אישור"

  constructor(public dialogRef: MatDialogRef<DeleteConfirmationDialogComponent>) {}

  onCancel(): void {
    this.dialogRef.close(false); 
  }

  onConfirm(): void {
    this.dialogRef.close(true);
  }
}