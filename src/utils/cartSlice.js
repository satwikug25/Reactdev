import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice( {
    name: 'cart',
    initialState: {
        items:[]

    },
    //reducers are callback functions which update the slice, called on the dispatch of an action
    reducers:{
        addItem: (state,action) => {
            state.items.push(action.payload); //pushing the action.payload into the items inside the state


        }, 

        clearCart: (state) => {
            state.items = [];
        },

        removeItem: (state,action) => {
            state.items.pop();
        }

    }              //INITIAL VALUE OF THE SLICE

}   );

export const {addItem,clearCart,removeItem} = cartSlice.actions;

export default cartSlice.reducer;