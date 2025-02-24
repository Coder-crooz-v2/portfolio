// filepath: /c:/Users/souna/OneDrive/Desktop/dev projects/portfolio/client/src/redux/store.ts
import { configureStore } from '@reduxjs/toolkit';
import menuReducer from './slices/menuSlice';
import formReducer from './slices/formSlice';

const store = configureStore({
  reducer: {
    menu: menuReducer,
    form: formReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;