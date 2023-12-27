import { createSlice } from "@reduxjs/toolkit";

const categoriesSlice = createSlice({
    name: "categories",
    initialState: {data:null},
    reducers: {}
})

export const categoriesReducer = categoriesSlice.reducer;
export const categoriesActions = categoriesSlice.actions;