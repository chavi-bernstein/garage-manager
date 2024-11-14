import { createReducer, on } from "@ngrx/store";
import { Garage } from "../models/garage";
import { loadGarages, loadGaragesFailure, loadGaragesSuccess } from "./actions";

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
);