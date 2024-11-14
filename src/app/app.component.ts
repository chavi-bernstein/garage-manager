import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AddGaragesComponent } from './features/add-garages/add-garages.component';
import { CustomButtonComponent } from './core/custom-button/custom-button.component';
import { GaragesTableComponent } from './features/garages-table/garages-table.component';
import { CustomAppBarComponent } from './core/custom-app-bar/custom-app-bar.component';
import { Store } from '@ngrx/store';
import { AppState } from './store/store';
import { loadGarages } from './store/actions';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AddGaragesComponent, CustomButtonComponent, GaragesTableComponent, CustomAppBarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent implements OnInit {

  constructor(private _store: Store<AppState>) { }

  ngOnInit() {
    this._store.dispatch(loadGarages());
  }

}