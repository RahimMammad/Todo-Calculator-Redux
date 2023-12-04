
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
 value: 0,
};

const calculatorSlice = createSlice({
  name: 'calculator',
  initialState,
  reducers: {
    value1: (state, action) => {
      state.inp1 = action.payload;
    },
    value2: (state, action) => {
      state.inp2 = action.payload;
    },
    Topla: (state) => {
      state.value = Number(state.inp1) + Number(state.inp2);
 
    },
    Cix: (state) => {
   
    state.value = state.inp1 - state.inp2;
    },
    Vurma: (state) => {
  
    state.value = state.inp1 * state.inp2;
    },
    Bolme: (state) => {
    
    state.value = state.inp1 / state.inp2;
    },
    Ortalama: (state) => {
        state.value = (Number(state.inp1) + Number(state.inp2)) / 2
    }
  },
});

export const { value1, value2, Topla, Cix, Vurma, Bolme, Ortalama } = calculatorSlice.actions;

export default calculatorSlice.reducer;