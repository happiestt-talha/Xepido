import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    history: [],
};
const ordersSlice = createSlice({
    name: 'orderHistory',
    initialState,
    reducers: {
        addOrder: (state, action) => {
            state.history.push(action.payload);
        },
    },
});

export const { addOrder } = ordersSlice.actions;
export default ordersSlice.reducer;
