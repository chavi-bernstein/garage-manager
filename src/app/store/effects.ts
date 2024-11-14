import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, of } from 'rxjs';
import { GarageService } from '../services/garage-service.service';
import { loadGarages, loadGaragesFailure, loadGaragesSuccess } from "./actions";

@Injectable()
export class GarageEffects {

    constructor(private _actions$: Actions, private garageService: GarageService) { }

    /**
    * Effect that handles loading the garages.
    * This effect listens for the 'loadGarages' action and triggers a service call to fetch the garages.
    * It then dispatches the success or failure action based on the response.
    */
    loadGarages$ = createEffect(() =>
        this._actions$.pipe(
            ofType(loadGarages),
            mergeMap(() =>
                this.garageService.getGarages().pipe(
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
}
