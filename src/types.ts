export type ActionType = { payload?: any; type: string };
export type DispatchType = ({ type, payload }: ActionType) => void;

// Redux Reducer Types
export type User = {
  id: number;
  name: string;
  username: string;
  website: string;
};
