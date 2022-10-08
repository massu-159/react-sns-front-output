import { createContext, useReducer } from "react";
import AuthReducer from "./AuthReducer";

// 最初のユーザー状態を定義
const initialUserState = {
  user: null,
  isFetching: false,
  error: false,
};

// 状態をグローバルに管理
export const AuthContext = createContext(initialUserState);

export const AuthContextProvider = ({children}) => {
  const [state, dispatch] = useReducer(AuthReducer, initialUserState);
  return (
    <AuthContext.Provider
      value={{
        user: state.user,
        isFetching: state.isFetching,
        error: state.error,
        dispatch,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
};