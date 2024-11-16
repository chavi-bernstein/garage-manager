import { createReducer, on } from "@ngrx/store";
import { Garage } from "../models/garage";
import { addGarages, deleteGarage, deleteGarageSuccess, deleteGarageFailure, loadGarages, loadGaragesSuccess, loadGaragesFailure, addGaragesSuccess, addGaragesFailure } from './actions';

export interface GaragesState {
    garages: Garage[];
    loading: boolean;
    error: string;
}

export const initialState: GaragesState = {
    garages: [],
    loading: true,
    error: ''
};


export const garageReducer = createReducer(
    initialState,

    on(loadGarages, state => ({ ...state, loading: true })),

    on(loadGaragesSuccess, (state, { garages }) => ({ ...state, garages, loading: false })),

    on(loadGaragesFailure, (state, { error }) => ({ ...state, error, loading: false })),

    on(deleteGarage, state => ({ ...state, loading: true })),

    on(deleteGarageSuccess, (state, { id }) => ({
        ...state,
        garages: state.garages.filter((garage) => garage.id !== id),
        loading: false
    })),

    on(deleteGarageFailure, (state, { error }) => ({ ...state, error, loading: false })),

    on(addGarages, state => ({ ...state, loading: true })),

    on(addGaragesSuccess, (state, { garages }) => ({ ...state, garages: [...state.garages, ...garages], loading: false })),

    on(addGaragesFailure, (state, { error }) => ({ ...state, error, loading: false })),
);