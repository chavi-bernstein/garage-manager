import { Injectable } from '@angular/core';
import { NetworkService } from '../core/services/network.service';
import { Observable, map, Subject } from 'rxjs';
import { Garage } from '../models/garage';

@Injectable({
  providedIn: 'root'
})

export class GarageService {
  garages: Subject<Garage[]> = new Subject<Garage[]>();

  constructor(private _networkService: NetworkService) { }

  getGarages(): Observable<Garage[]> {
    return this._networkService.get('garages', { 'limit': 5, 'offset': 0 }).pipe(
      map(response => {
        const garages = response.map((garageJson: any) => Garage.fromJson(garageJson));

        this.garages.next(garages);

        return garages;
      },
      )
    );
  }
}
