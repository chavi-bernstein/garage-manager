import { createReducer, on } from "@ngrx/store";
import { Garage } from "../models/garage";
import { deleteGarage, deleteGarageSuccess, deleteGarageFailure, loadGarages, loadGaragesSuccess, loadGaragesFailure } from './actions';

export interface GaragesState {
    garages: Garage[];
    loading: boolean;
    error: string;
}

export const initialState: GaragesState = {
    garages: [],
    loading: false,
    error: ''
};


export const garageReducer = createReducer(
    initialState,

    on(loadGarages, state => ({ ...state, loading: true })),

    on(loadGaragesSuccess, (state, { garages }) => ({ ...state, garages, loading: false })),

    on(loadGaragesFailure, (state, { error }) => ({ ...state, error, loading: false })),

    on(deleteGarageSuccess, (state, { id }) => ({ ...state,  garages: state.garages.filter((garage) => garage.id !== id),  })),

    on(deleteGarageFailure, (state, { error }) => ({ ...state, error }))
);