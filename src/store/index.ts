import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { categoriesReducer } from "./slices/categories.slice";

const RootReducer = combineReducers({
    categoriesStore: categoriesReducer,
})

export const store = configureStore({
    reducer: RootReducer,
})