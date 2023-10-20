import { UserId, deleteUserById, addNewUser, User } from "../store/users/slice";
import { useAppDispatch } from "./tipadoHook"


export const useUser = () => {

    const dispatch = useAppDispatch()

    const addUser = ({ nombre, email, edad, gitHub }: User) => {
      dispatch(addNewUser({ nombre, email, edad, gitHub }));
  };
  
    const removeUser = (id: UserId) => { 
        dispatch(deleteUserById(id))

    }

    return { removeUser, addUser };
}