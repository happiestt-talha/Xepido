import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    currentStore: [],
};

const storeSlice = createSlice({
    name: "store",
    initialState,
    reducers: {
        createStore: (state, action) => {
            state.currentStore = action.payload;
        },
        updateStore: (state, action) => {
            state.currentStore = action.payload;
        },
        deleteStore: (state,) => {
            state.currentStore = null;
        },
    },
});

export const { createStore, updateStore, deleteStore } = storeSlice.actions;

export default storeSlice.reducer;