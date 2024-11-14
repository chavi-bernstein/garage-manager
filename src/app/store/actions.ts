import { createAction, props } from '@ngrx/store';
import { Garage } from '../models/garage';


export const loadGarages = createAction('[Garage] Load Garages');
export const loadGaragesSuccess = createAction('[Garage] Load Garages Success', props<{ garages: Garage[] }>());
export const loadGaragesFailure = createAction('[Garage] Load Garages Failure', props<{ error: string }>());