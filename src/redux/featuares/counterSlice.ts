/* eslint-disable @typescript-eslint/no-unused-vars */
import { createSlice } from '@reduxjs/toolkit'

type CounterState= {
    count:number
}

const initialState:CounterState= {
    count:0,
}

export const counterSlice= createSlice({
    name:'counter',
    initialState,
    reducers:{
        add:(state,action)=>{
            state.count= state.count+1;
        },
        substract:(state,action)=>{
            state.count= state.count -1;

        }
    }

})
export const {add,substract}=counterSlice.actions;
export default counterSlice.reducer;