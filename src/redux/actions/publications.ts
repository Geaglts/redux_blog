import { DispatchType } from '../../types';
import axios from 'axios';
import { PublicationTypes } from '../reducers/publications';

export const traerTodos = () => async (dispatch: DispatchType) => {
  try {
    dispatch({
      type: PublicationTypes.LOAD,
    });
    const { data } = await axios.get('https://jsonplaceholder.typicode.com/posts');
    dispatch({
      type: PublicationTypes.GET_PUBLICATIONS,
      payload: data,
    });
  } catch {
    dispatch({
      type: PublicationTypes.ERROR,
      payload: 'No se pudieron cargar las publicaciones.',
    });
  }
};

export const traerPorUsuario = (userId: String) => async (dispatch: DispatchType) => {
  const { data } = await axios.get(
    `https://jsonplaceholder.typicode.com/posts?userId=${userId}`
  );
  console.log(data);
  dispatch({ type: PublicationTypes.GET_PUBLICATIONS, payload: data });
};
