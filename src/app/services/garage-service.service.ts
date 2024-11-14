
import { Injectable } from '@angular/core';
import { NetworkService } from '../core/services/network.service';
import { Observable, map } from 'rxjs';
import { Garage } from '../models/garage';

@Injectable({
  providedIn: 'root'
})

export class GarageService {
  constructor(private _networkService: NetworkService) { }

  getGarages(): Observable<Garage[]> {
    return this._networkService.get<Garage[]>('garages', { 'limit': 50 });
  }
}