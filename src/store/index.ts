import { configureStore } from "@reduxjs/toolkit";

import userReducer from "./users/slice";

//Creacion del Middleware para persistencia de datos
const persistenceLocalStorageMiddleware = (store) => (next) => (action) => {
  next(action);
  localStorage.setItem("redux_state_users", JSON.stringify(store.getState()));
};

export const store = configureStore({
  reducer: {
    users: userReducer,
  },
  middleware: [persistenceLocalStorageMiddleware],
});

//Con este export solucionamos el problema del state del componente, con este metodo
//Nos encargamos de que devuelva el tipo de la funcion que se este utilizando
export type RootState = ReturnType<typeof store.getState>;

//El mismo caso para el dispactch
export type AppDispatch = typeof store.dispatch;
