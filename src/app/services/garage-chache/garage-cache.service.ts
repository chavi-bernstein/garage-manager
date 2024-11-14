import { Injectable } from '@angular/core';
import { Garage } from '../../models/garage';

@Injectable({
  providedIn: 'root'
})

export class GarageCacheService {
  private _addedGarages: Garage[] = [];

  addGarage(garage: Garage): void {
    this._addedGarages.push(garage);
  }

  getAddedGarages(): Garage[] {
    return [...this._addedGarages];
  }

  clearCache(): void {
    this._addedGarages = [];
  }
}
