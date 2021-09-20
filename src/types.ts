export type ActionType = { payload?: any; type: string };
export type DispatchType = ({ type, payload }: ActionType) => void;
