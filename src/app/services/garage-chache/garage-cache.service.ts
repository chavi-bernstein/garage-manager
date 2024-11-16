import { Injectable } from '@angular/core';
import { Garage } from '../../models/garage';

@Injectable({
  providedIn: 'root'
})

/**
 * GarageCacheService
 * 
 * This service temporarily stores garages that need to be added, acting as a cache.
 * When a trigger is activated, the cached garages are sent to the server.
 */
export class GarageCacheService {
  /** 
   * Array to store garages temporarily before sending to the server 
   */
  private _addedGarages: Garage[] = [];

  /**
   * Adds a garage to the cache
   */
  addGarage(garage: Garage): void {
    this._addedGarages.push(garage);
  }

  /**
 * Retrieves the cached garages
 */
  getAddedGarages(): Garage[] {
    return [...this._addedGarages];
  }

  /**
  * Clears the garage cache
  */
  clearCache(): void {
    this._addedGarages = [];
  }
}
