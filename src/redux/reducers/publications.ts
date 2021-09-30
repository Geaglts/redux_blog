// types
import { ActionType } from '../../types';
type InitialStateType = {
  loading: boolean;
  error: string | null;
  publications: Array<object>;
};

export enum PublicationTypes {
  LOAD = 'LOAD_PUBLICATIONS',
  ERROR = 'ERROR_PUBLICATIONS',
  GET_PUBLICATIONS = 'GET_PUBLICATIONS',
}

const INITIAL_STATE: InitialStateType = {
  loading: false,
  error: null,
  publications: [],
};

function userReducer(state = INITIAL_STATE, action: ActionType) {
  switch (action.type) {
    case PublicationTypes.LOAD:
      return <InitialStateType>{
        ...state,
        loading: true,
        error: null,
      };
    case PublicationTypes.GET_PUBLICATIONS:
      return <InitialStateType>{
        ...state,
        loading: false,
        users: action.payload,
        error: null,
      };
    case PublicationTypes.ERROR:
      return <InitialStateType>{
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
}

export default userReducer;
