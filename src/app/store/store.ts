import { Action, ActionReducer } from "@ngrx/store";
import { garageReducer, GaragesState } from "./reducers";
import { GarageEffects } from "./effects";

export interface AppState {
    garages: GaragesState;
  }
  
  export interface AppStore {
    garages: ActionReducer<GaragesState, Action>;
  }
  
  export const appStore: AppStore = {
    garages: garageReducer
  }
  
  export const appEffects = [GarageEffects];