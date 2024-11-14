import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DeleteGaragesListComponent } from './features/delete-garages/delete-garages-list/delete-garages-list.component';
import { CustomButtonComponent } from './core/custom-button/custom-button.component';
import { GaragesTableComponent } from './features/garages-table/garages-table.component';
import { CustomAppBarComponent } from './core/custom-app-bar/custom-app-bar.component';
import { Store } from '@ngrx/store';
import { AppState } from './store/store';
import { loadGarages } from './store/actions';
import { AddGarageButtonComponent } from './features/AddGarage/add-garage/add-garage-button.component';
import { selectGaragesLoading, selectGaragesError, selectAllGarages } from './store/selectors';
import { Observable } from 'rxjs/internal/Observable';
import { CommonModule } from '@angular/common';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ErrorMessageComponent } from './core/error-message/error-message.component';
import { Garage } from './models/garage';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, DeleteGaragesListComponent, CustomButtonComponent, GaragesTableComponent, CustomAppBarComponent, AddGarageButtonComponent, CommonModule, MatProgressSpinnerModule, ErrorMessageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent implements OnInit {
  isLoading$: Observable<boolean>;
  error$: Observable<string | null>;
  garages$: Observable<Garage[]>;

  constructor(private _store: Store<AppState>) {
    this.isLoading$ = this._store.select(selectGaragesLoading);
    this.error$ = this._store.select(selectGaragesError);
    this.garages$ = this._store.select(selectAllGarages);
  }

  ngOnInit() {
    this._store.dispatch(loadGarages());
  }
}
