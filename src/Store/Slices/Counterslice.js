import { createAction, createSlice } from "@reduxjs/toolkit";
import { Store } from "@reduxjs/toolkit";

const reset = 'counter/addValue'
const Counterslice = createSlice({
    name:'counter',
    initialState:0,
    reducers:{
        increment(state,action){
            return state+1;
        },
        decrement(state,action){
            return state-1;
        },
        addValue(state,action){
            return state + action.payload;
        }
    }
})
const Valueslice = createSlice({
    name:'value',
    initialState:'',
    reducers:{
        changeValue(state,action){
            return action.payload
        }
        
    },
    extraReducers(builder) {
        builder.addCase(reset, (state, action) => {
          return '';
        });
      }
})

const newState =Counterslice.actions.increment();

export const Counterreducer = Counterslice.reducer;
export const Valuereducer = Valueslice.reducer;
export const {changeValue}= Valueslice.actions;
export const {increment,decrement,addValue}=Counterslice.actions;