import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatFormField } from '@angular/material/form-field';
import { MatLabel } from '@angular/material/form-field';
import { MatError } from '@angular/material/form-field';
import { MatDialogContent } from '@angular/material/dialog';
import { ReactiveFormsModule } from '@angular/forms';
import { CustomButtonComponent } from '../../../core/custom-button/custom-button.component';

@Component({
  selector: 'app-garage-form',
  standalone: true,
  imports: [MatFormField, MatLabel, MatError, ReactiveFormsModule, MatDialogContent,CustomButtonComponent],
  templateUrl: './garage-form.component.html',
  styleUrls: ['./garage-form.component.css']
})
export class GarageFormComponent {
  garageForm!: FormGroup;
  formControlKeys!: string[];
  formFieldLabels!: { [key: string]: string };

  constructor(
    public dialogRef: MatDialogRef<GarageFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private fb: FormBuilder
  ) {
    this.initFormsControls();
    this.initLabels();
  }

  initFormsControls() {
    this.garageForm = this.fb.group({
      number: [null, [Validators.required, Validators.min(1)]],
      name: [null, [Validators.required, Validators.minLength(2)]],
      typeCode: [null],
      type: [null],
      address: [null, [Validators.pattern(/^\S.*\S$/)]],
      settlement: [null, [Validators.pattern(/^\S.*\S$/)]],
      phone: [null, [Validators.pattern(/^[0-9]{10}$/)]],
      postalCode: [null, [Validators.pattern(/^\d{5}$/)]],
      professionCode: [null, [Validators.pattern(/^\d+$/)]],
      profession: [null, [Validators.pattern(/^\S.*\S$/)]],
      professionManager: [null, [Validators.pattern(/^\S.*\S$/)]],
      registrationNumber: [null, [Validators.pattern(/^\d+$/)]],
      testTime: [null, [Validators.pattern(/^([0-1][0-9]|2[0-3]):[0-5][0-9]$/)]],
    });

    this.formControlKeys = Object.keys(this.garageForm.controls);
  }

  initLabels() {
    this.formFieldLabels = {
      number: 'מספר מוסך',
      name: 'שם מוסך',
      typeCode: 'סוג מוסך',
      type: 'סוג',
      address: 'כתובת',
      settlement: 'ישוב',
      phone: 'טלפון',
      postalCode: 'מיקוד',
      professionCode: 'קוד מקצוע',
      profession: 'מקצוע',
      professionManager: 'מנהל מקצוע',
      registrationNumber: 'מספר רישום',
      testTime: 'שעת בדיקה',
    }; 
  }

  onSubmit() {
    if (this.garageForm.valid) {
      this.dialogRef.close(this.garageForm.value);
    } else {
      console.log('Form is not valid');
    }
  }

  onCancel(): void {
    this.dialogRef.close();
  }
}
