import { configureStore } from '@reduxjs/toolkit';
import bazarRedcuer from "./BazarSlice";




export const store = configureStore({
  reducer: {
   bazar : bazarRedcuer,
    }
});