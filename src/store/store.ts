import { configureStore } from '@reduxjs/toolkit';
import analysisReducer from './slice';

export const store = configureStore({
  reducer: {
    analysis: analysisReducer,
  },
});

// Export types for use in the application
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
