import { Component, OnInit } from '@angular/core';
import { Garage } from '../../models/garage';
import { Store } from '@ngrx/store';
import { CustomButtonComponent } from '../../core/custom-button/custom-button.component';
import { AppState } from '../../store/store';
import { selectAllGarages } from '../../store/selectors';
import { Observable, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { CommonModule } from '@angular/common';
import { DeleteGarageComponent } from '../delete-garages/delete-garage/delete-garage.component';

@Component({
  selector: 'app-delete-garages-list',
  standalone: true,
  imports: [ CustomButtonComponent, CommonModule, DeleteGarageComponent],
  templateUrl: './delete-garages-list.component.html',
  styleUrls: ['./delete-garages-list.component.css']
})
export class DeleteGaragesListComponent implements OnInit {
  delete: string = "מחיקה";
  garages$: BehaviorSubject<Garage[]> = new BehaviorSubject<Garage[]>([]);
  garageNames$: Observable<string[]> | undefined;
  deleteGarages: string = 'מחיקת מוסכים';

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
