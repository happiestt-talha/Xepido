import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    currWishList: [],
};

const wishListSlice = createSlice({
    name: "wishList",
    initialState,
    reducers: {
        addToWishList: (state, action) => {
            state.currWishList.push(action.payload);
        },

        removeFromWishList: (state, action) => {
            state.currWishList = state.currWishList.filter(
                (item) => item.id !== action.payload
            );
        },
    },
});

export const { addToWishList, removeFromWishList } = wishListSlice.actions;

export default wishListSlice.reducer;