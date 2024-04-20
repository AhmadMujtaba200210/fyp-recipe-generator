import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import authReducer from "./state";
import { persistStore,persistReducer,FLUSH,REHYDRATE,PAUSE,PERSIST,REGISTER,PURGE } from 'redux-persist';
import storage from "redux-persist/lib/storage";
import { PersistGate } from 'redux-persist/integration/react';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';


//  setting up the redux state store to store the login user state in local storage as cached memory
// all of this setting information is taken from the documentation of redux-toolkit and redux-persist
const persistConfig={key: "root", storage, version: 1};
const persistedReducer= persistReducer(persistConfig,authReducer);
const store=configureStore({
  reducer: persistedReducer,
  middleware:(getDefaultMiddleware)=>getDefaultMiddleware({
    serializableCheck:{
      ignoredActions: [FLUSH,REHYDRATE,PAUSE,PERSIST,REGISTER,PURGE],
    },
  }),
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistStore(store)}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
