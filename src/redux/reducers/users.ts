// types
import { ActionType } from '../../types';
type InitialStateType = { loading: boolean; error: string | null; users: Array<object> };

export enum UserTypes {
  LOAD = 'LOAD',
  ERROR = 'ERROR',
  GET_USERS = 'GET_USERS',
}

const INITIAL_STATE: InitialStateType = {
  loading: false,
  error: null,
  users: [],
};

function userReducer(state = INITIAL_STATE, action: ActionType) {
  switch (action.type) {
    case UserTypes.LOAD:
      return <InitialStateType>{ ...state, loading: true };
    case UserTypes.GET_USERS:
      return <InitialStateType>{ ...state, loading: false, users: action.payload };
    case UserTypes.ERROR:
      return <InitialStateType>{ ...state, loading: false, error: action.payload };
    default:
      return state;
  }
}

export default userReducer;
