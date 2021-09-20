import axios from 'axios';

// reducer types
import { UserTypes } from '../reducers/users';

// custom types
import { DispatchType } from '../../types';

export const getAllUsers = () => async (dispatch: DispatchType) => {
  dispatch({ type: UserTypes.LOAD });
  try {
    const { data } = await axios.get('https://jsonplaceholder.typicode.com/users');
    dispatch({ type: UserTypes.GET_USERS, payload: data });
  } catch {
    dispatch({ type: UserTypes.ERROR, payload: 'No se pudieron cargar los usuarios' });
  }
};
