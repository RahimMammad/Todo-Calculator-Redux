import { configureStore } from "@reduxjs/toolkit";
import CalculatorReducer from "./features/CalculatorReducer";
import TodoReducer from "./features/TodoReducer";

export const store = configureStore({
    reducer: {
        calculator: CalculatorReducer,
        todos: TodoReducer,
    }
})