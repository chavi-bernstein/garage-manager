import { Component, OnInit } from '@angular/core';
import { Garage } from '../../models/garage';
import { CustomMultiSelectComponent } from '../../core/custom-multi-select/custom-multi-select.component';
import { Store } from '@ngrx/store';
import { CustomButtonComponent } from '../../core/custom-button/custom-button.component';
import { AppState } from '../../store/store';
import { selectAllGarages } from '../../store/selectors';
import { Observable, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-add-garages',
  standalone: true,
  imports: [CustomMultiSelectComponent, CustomButtonComponent, CommonModule],
  templateUrl: './add-garages.component.html',
  styleUrls: ['./add-garages.component.css']
})
export class AddGaragesComponent implements OnInit {
  add: string = "הוספה";
  garages$: BehaviorSubject<Garage[]> = new BehaviorSubject<Garage[]>([]);
  garageNames$: Observable<string[]> | undefined;
  addGarages: string = 'הוספת מוסכים';

  constructor(private _store: Store<AppState>) { }

  ngOnInit() {
    this._store.select(selectAllGarages).subscribe((garages) => {
      this.garages$.next(garages);
    });

    this.garageNames$ = this.garages$.pipe(
      map(garages => garages.map(garage => garage.name))
    );
  }

  toggleCheckboxFn(item: string, checked: boolean) {
    console.log(item, checked);
  }

  onButtonTap() {
    console.log("Button tapped");
  }
}
