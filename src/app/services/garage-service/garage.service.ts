
import { Injectable } from '@angular/core';
import { NetworkService } from '../network-service/network.service';
import { Observable, first, from, map, switchMap } from 'rxjs';
import { Garage, GarageModel } from '../../models/garage';
import { selectAllGarages } from '../../store/selectors';
import { Store } from '@ngrx/store';
import { AppState } from '../../store/store';

@Injectable({
  providedIn: 'root'
})

export class GarageService {
  constructor(private _networkService: NetworkService, private _store: Store<AppState>
  ) { }

  getGarages(): Observable<Garage[]> {
    return this._networkService.get<Garage[]>('garages', { 'limit': 5 });
  }

  deleteGarage(id: number): Observable<any> {
    return this._networkService.delete<any>(`garages/${id}`);
  }

  createGarages(garages: Garage[]): Observable<any> {
    console.log("garages");
    console.log(garages);
    return this._store.select(selectAllGarages).pipe(
      first(),
      switchMap((existingGarages: Garage[]) => {
        const newGarages = garages.filter(
          garage => !existingGarages.some(existingGarage => existingGarage.id == garage.id)
        );


        if (newGarages.length > 0) {
          const garagesJson = newGarages.map(garage => new GarageModel(garage).toJson());
          console.log("garagesJson")
          console.log(garagesJson)

          return this._networkService.post('garages', garagesJson);
        } else {
          console.log('All garages are already in the state, nothing to send.');
          return from([]);
        }
      })
    );
  }
}