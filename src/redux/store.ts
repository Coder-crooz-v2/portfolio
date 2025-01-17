// filepath: src/redux/store.ts
import { configureStore } from '@reduxjs/toolkit';
import themeReducer from './slices/themeSlice';
import formReducer from './slices/formSlice';

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    form: formReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;