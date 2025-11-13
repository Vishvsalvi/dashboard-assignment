import { createStore, combineReducers } from 'redux';
import homeReducer from './slices/homeSlice';

const rootReducer = combineReducers({
  home: homeReducer,
});

export const store = createStore(rootReducer);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
