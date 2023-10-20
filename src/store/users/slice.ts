import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export type UserId = `${string}-${string}-${string}-${string}-${string}`;

export interface User {
  nombre: string;
  email: string;
  edad: string;
  gitHub: string;
}

export interface UserWithId extends User {
  id: UserId;
}

const defaultState = [
  {
    id: crypto.randomUUID(),
    nombre: "Ismael",
    email: "ismael@gmail.com",
    edad: 27,
    gitHub: "Taxontes",
  },
  {
    id: crypto.randomUUID(),
    nombre: "Alejandra",
    email: "alejandra@gmail.com",
    edad: 24,
    gitHub: "Alejandra",
  },
  {
    id: crypto.randomUUID(),
    nombre: "Jhony",
    email: "jhony@gmail.com",
    edad: 28,
    gitHub: "Jhony",
  },
  {
    id: crypto.randomUUID(),
    nombre: "Cristian",
    email: "cristian@gmail.com",
    edad: 28,
    gitHub: "Cristian",
  },
];

//Con esto permitimos que almacene la informacion del localStorage en caso de tener algo y en su defecto usar el default creado arriba
const initialState: UserWithId[] = (() => {
  const persitendState = localStorage.getItem("redux_state_users");
  return persitendState ? JSON.parse(persitendState).users : defaultState;
})();

export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    addNewUser: (state, action: PayloadAction<User>) => {
      const id = crypto.randomUUID();
      state.push({id, ...action.payload})
    },

    deleteUserById: (state, action: PayloadAction<UserId>) => {
      const id = action.payload;
      return state.filter((user) => user.id != id);
    },
  },
});

export default usersSlice.reducer;

//Al exportar la accion como constante podemos acceder a ella importandola sencillamente
export const { deleteUserById, addNewUser } = usersSlice.actions;
