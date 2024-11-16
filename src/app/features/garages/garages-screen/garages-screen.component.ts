import { Component } from '@angular/core';
import { DeleteGaragesListComponent } from '../delete-garages/delete-garages-list/delete-garages-list.component';
import { AppState } from '../../../store/store';
import { selectAllGarages, selectGaragesError, selectGaragesLoading } from '../../../store/selectors';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Garage } from '../../../models/garage';
import { loadGarages } from '../../../store/actions';
import { CommonModule } from '@angular/common';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { CustomAppBarComponent } from '../../../core/custom-app-bar/custom-app-bar.component';
import { CustomButtonComponent } from '../../../core/custom-button/custom-button.component';
import { ErrorMessageComponent } from '../../../core/error-message/error-message.component';
import { AddGarageButtonComponent } from '../add-garage/add-garage-button/add-garage-button.component';
import { EmptyScreenComponent } from '../empty/empty.component';
import { GaragesTableComponent } from '../garages-table/garages-table.component';
import { SendGaragesComponent } from '../send-garages/send-garages.component';

@Component({
  selector: 'app-garages-screen',
  standalone: true,
  imports: [DeleteGaragesListComponent, EmptyScreenComponent, CustomButtonComponent, GaragesTableComponent, CustomAppBarComponent, AddGarageButtonComponent, CommonModule, MatProgressSpinnerModule, ErrorMessageComponent, SendGaragesComponent],
  templateUrl: './garages-screen.component.html',
  styleUrl: './garages-screen.component.css'
})
export class GaragesScreenComponent {
  isLoading$: Observable<boolean>;
  error$: Observable<string | null>;
  garages$: Observable<Garage[]>;

  constructor(private _store: Store<AppState>) {
    this.isLoading$ = this._store.select(selectGaragesLoading);
    this.error$ = this._store.select(selectGaragesError);
    this.garages$ = this._store.select(selectAllGarages);
  }

  ngOnInit() {
    console.log('Component initialized - dispatching loadGarages');
    this._store.dispatch(loadGarages());
  }

}
