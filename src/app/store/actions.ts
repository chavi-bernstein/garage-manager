import { createAction, props } from '@ngrx/store';
import { Garage } from '../models/garage';


export const loadGarages = createAction(
    '[Garage] Load Garages'
);

export const loadGaragesSuccess = createAction(
    '[Garage] Load Garages Success',
    props<{ garages: Garage[] }>()
);

export const loadGaragesFailure = createAction(
    '[Garage] Load Garages Failure',
    props<{ error: string }>()
);

export const deleteGarage = createAction(
    '[Garage] Delete Garage',
    props<{ id: string }>()
);

export const deleteGarageSuccess = createAction(
    '[Garage] Delete Garage Success',
    props<{ id: string }>()
);

export const deleteGarageFailure = createAction(
    '[Garage] Delete Garage Failure',
    props<{ error: string }>()
);


export const addGarages = createAction(
    '[Garage] Add Garage',
    props<{ garages: Garage[] }>()
);

export const addGaragesSuccess = createAction(
    '[Garage] Add Garage Success',
    props<{ garages: Garage[] }>()
);

export const addGaragesFailure = createAction(
    '[Garage] Add Garage Failure',
    props<{ error: string }>()
);