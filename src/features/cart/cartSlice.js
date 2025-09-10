import {createSlice} from '@reduxjs/toolkit'

const cartSlice = createSlice({
    name:'cart',
    initialState:{
        items: []
    },
    reducers:{
        addItem: (state, action) => {
            const item = state.items.find(i => i.id === action.payload.id);
            if(item){
                item.quantity += 1
            }
            else{
                state.items.push({...action.payload, quantity: 1});
            }
        },

        removeItem:(state, action) => {
            const item = state.items.find(i => {i.id === action.payload.id});
            if(item.quantity == 1){
                state.items = state.items.filter(i => i.id !== action.payload);
            }
            else{
                item.quantity -= 1;
            }
        }
    }
})

export const {addItem, removeItem} = cartSlice.actions;
export default cartSlice.reducer;