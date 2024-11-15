import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatFormField } from '@angular/material/form-field';
import { MatLabel } from '@angular/material/form-field';
import { MatError } from '@angular/material/form-field';
import { MatDialogContent } from '@angular/material/dialog';
import { ReactiveFormsModule } from '@angular/forms';
import { CustomButtonComponent } from '../../../core/custom-button/custom-button.component';
import { CustomAppBarComponent } from "../../../core/custom-app-bar/custom-app-bar.component";
import { Store } from '@ngrx/store';
import { addGarages } from '../../../store/actions';
import { Garage } from '../../../models/garage';
import { GarageCacheService } from '../../../services/garage-chache/garage-cache.service';

@Component({
  selector: 'app-garage-form',
  standalone: true,
  imports: [MatFormField, MatLabel, MatError, ReactiveFormsModule, MatDialogContent, CustomButtonComponent, CustomAppBarComponent],
  templateUrl: './garage-form.component.html',
  styleUrls: ['./garage-form.component.css']
})
export class GarageFormComponent {
  garageForm!: FormGroup;
  formControlKeys!: string[];
  formFieldLabels!: { [key: string]: string };
  enter: string = "הכנס";
  cancel: string = "ביטול";
  send: string = "שליחה";
  save: string = "שמור";
  addNewGarage: string = "הוסף מוסך חדש";
  isSaving = false;

  constructor(
    public dialogRef: MatDialogRef<GarageFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _fb: FormBuilder,
    private _store: Store, private _garageCacheService: GarageCacheService
  ) {
    this.initFormsControls();
    this.initLabels();
  }

  initFormsControls() {
    this.garageForm = this._fb.group({
      id: [null, [Validators.required, Validators.pattern(/^\d+$/)]],
      number: [null, [Validators.required, Validators.pattern('^[0-9]+$'), Validators.min(1)]],
      name: [null, [Validators.required, Validators.minLength(2)]],
      typeCode: [null, [Validators.pattern(/^\d+$/)]],
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
      id: 'מזהה',
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

  getErrorMessage(controlName: string): string | null {
    const control = this.garageForm.get(controlName);
    if (control && control.errors) {
      if (control.hasError('required')) {
        return `${this.formFieldLabels[controlName]} חובה`;
      } else if (control.hasError('min')) {
        return `${this.formFieldLabels[controlName]} לא יכול להיות קטן מ-${control.errors['min'].min}`;
      } else if (control.hasError('minlength')) {
        return `${this.formFieldLabels[controlName]} חייב להיות לפחות ${control.errors['minlength'].requiredLength} תווים`;
      } else if (control.hasError('pattern')) {
        return `${this.formFieldLabels[controlName]} אינו תואם את הפורמט הנדרש`;
      }
    }
    return null;
  }

  onSave(): void {
    if (this.garageForm.valid) {
      const newGarage: Garage = {
        ...this.garageForm.value,
      };

      this.isSaving = true;
      this._garageCacheService.addGarage(newGarage);

      this.dialogRef.close(newGarage);
    } else {
      console.log('Form is not valid');
    }
  }

  onSubmit(): void {
    if (this.isSaving) {
      this.isSaving = false;
      return;
    }

    if (this.garageForm.valid) {
      const newGarage: Garage = {
        ...this.garageForm.value,
      };

      this._store.dispatch(addGarages({ garages: [newGarage] }));

      this.dialogRef.close(newGarage);
    } else {
      Object.keys(this.garageForm.controls).forEach(key => {
        const control = this.garageForm.get(key);
        if (control) {
          control.markAsTouched();
        }
      });

      console.log('Form is not valid');
    }
  }

  onCancel(): void {
    this.dialogRef.close();
  }
}
