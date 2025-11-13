import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import videoCartReducer from './features/VideoCartSlice';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['videoCart'],
};

const persistedReducer = persistReducer(persistConfig, videoCartReducer);

export const store = configureStore({
  reducer: {
    videoCart: persistedReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['persist/PERSIST', 'persist/REHYDRATE'],
      },
    }),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;