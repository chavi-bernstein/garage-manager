import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, of } from 'rxjs';
import { GarageService } from '../services/garage-service/garage.service';
import { addGarages, addGaragesFailure, addGaragesSuccess, loadGarages, loadGaragesFailure, loadGaragesSuccess } from "./actions";
import { deleteGarage, deleteGarageSuccess, deleteGarageFailure } from './actions';
import { Garage } from '../models/garage';

@Injectable()
export class GarageEffects {

  constructor(private _actions$: Actions, private _garageService: GarageService) { }

  /**
  * Effect that handles loading the garages.
  * This effect listens for the 'loadGarages' action and triggers a service call to fetch the garages.
  * It then dispatches the success or failure action based on the response.
  */
  loadGarages$ = createEffect(() =>
    this._actions$.pipe(
      ofType(loadGarages),
      mergeMap(() =>
        this._garageService.getGarages().pipe(
          // On success, dispatch the 'loadGaragesSuccess' action with the fetched garages.
          map((garages) => loadGaragesSuccess({ garages })),
          // On failure, dispatch the 'loadGaragesFailure' action with the error message.
          catchError((error) =>
            of(loadGaragesFailure({ error: error.message }))
          )
        )
      )
    ),
  );

  deleteGarage$ = createEffect(() =>
    this._actions$.pipe(
      ofType(deleteGarage),
      mergeMap(({ id }) =>
        this._garageService.deleteGarage(id).pipe(
          map(() => deleteGarageSuccess({ id })),
          catchError((error) => of(deleteGarageFailure({ error: error.message })))
        )
      )
    )
  );

  addGarages$ = createEffect(() =>
    this._actions$.pipe(
      ofType(addGarages),
      mergeMap(({ garages }) =>
        this._garageService.createGarages(garages).pipe(
          map((newGarages) => {
            if (newGarages && isGarageArray(newGarages)) {
              return addGaragesSuccess({ garages: newGarages });
            } else {
              throw new Error('Invalid garage data or no new garages to add.');
            }
          }),
          catchError((error) => of(addGaragesFailure({ error: error.message })))
        )
      )
    )
  );


}

// Type guard to check if an object is of type Garage
function isGarageArray(value: any): value is Garage[] {
  return Array.isArray(value) && value.every(item => item && typeof item.number === 'number' && typeof item.name === 'string');
}
