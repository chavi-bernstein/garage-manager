import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { GarageCacheService } from '../../services/garage-chache/garage-cache.service';
import { addGarages } from '../../store/actions';

@Component({
  selector: 'app-send-garages',
  standalone: true,
  imports: [],
  templateUrl: './send-garages.component.html',
  styleUrl: './send-garages.component.css'
})
export class SendGaragesComponent {
  saveGarages: string = "שמור מוסכים";

  constructor(
    private garageCacheService: GarageCacheService,
    private _store: Store
  ) { }

  sendGarages(): void {
    const garagesToSend = this.garageCacheService.getAddedGarages();

    if (garagesToSend.length > 0) {
      this._store.dispatch(addGarages({ garages: garagesToSend }));

      this.garageCacheService.clearCache();
    } else {
      console.log('There is no garages');
    }
  }
}
