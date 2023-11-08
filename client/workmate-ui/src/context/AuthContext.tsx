/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { createContext, useReducer, useEffect } from "react";

type User = {
  success: boolean;
  data: {
    id: string;
    firstname: string;
    lastname: string;
    email: string;
    token: string;
  }
}

const initialState: User = {
  success: false,
  data: {
    id: "",
    firstname: "",
    lastname: "",
    token: "",
    email: "",
  }
};

export const AuthContext = createContext({
  userState: initialState,
  dispatch: (e: any) => undefined,
});

const authReducer = (state: any, action: any) => {
  switch (action.type) {
    case "LOGIN":
      return {
        userState: action.payload,
      };
    case "LOGOUT":
      return initialState;
    default:
      return state;
  }
};

export const AuthContextProvider = ({ children }: any) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user") || "{}");

    if (user) {
      dispatch({ type: "LOGIN", payload: user });
    }
  }, []);  
  
  return (
    <AuthContext.Provider
      value={{
        ...state,
        dispatch,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
