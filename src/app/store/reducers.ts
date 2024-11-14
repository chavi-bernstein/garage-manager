import { createReducer, on } from "@ngrx/store";
import { Garage } from "../models/garage";
import { deleteGarageSuccess, deleteGarageFailure, loadGarages, loadGaragesSuccess, loadGaragesFailure, addGaragesSuccess, addGaragesFailure } from './actions';

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

    on(deleteGarageSuccess, (state, { id }) => ({ ...state, garages: state.garages.filter((garage) => garage.id !== id), })),

    on(deleteGarageFailure, (state, { error }) => ({ ...state, error })),

    on(addGaragesSuccess, (state, { garages }) => ({ ...state, garages: [...state.garages, ...garages] })),

    on(addGaragesFailure, (state, { error }) => ({ ...state, error }))
);