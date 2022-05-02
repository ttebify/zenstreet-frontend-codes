import React, { createContext, useEffect, useReducer } from "react";
import Axios from "../utils/axios";
import type {
  LoginPostValues,
  RegisterPostValues,
} from "../components/Forms/types";
import { apiRoutes } from "../utils/routes";
import {
  AuthUserState,
  getUser,
  handleLogin,
  handleLogout,
  handleRegister,
  RegisterApiResponse,
} from "../utils/auth";
import { BiLoader } from "react-icons/bi";
// import { MatxLoading } from "app/components";

const PageLoader = () => (
  <div className="flex justify-center items-center w-full h-screen">
    <div>
      <BiLoader className="animate-spin inline-block" /> Loading...
    </div>
  </div>
);

type AuthActions = "INIT" | "LOGOUT" | "LOGIN";
interface AuthState {
  isAuthenticated: boolean;
  isInitialised: boolean;
  user: null | AuthUserState;
}

interface AuthReducerActions<S extends AuthState, A> {
  type: A;
  payload: {
    [P in keyof S]: S[P];
  };
}

interface AuthContextType extends AuthState {
  login: (data: LoginPostValues) => Promise<void>;
  logout: () => Promise<void>;
  register: (data: RegisterPostValues) => Promise<RegisterApiResponse>;
  dispatch: React.Dispatch<AuthReducerActions<AuthState, AuthActions>>;
}

const initialState: AuthState = {
  isAuthenticated: false,
  isInitialised: false,
  user: getUser(),
};

const reducer = (
  state: AuthState,
  action: AuthReducerActions<AuthState, AuthActions>
): AuthState => {
  switch (action.type) {
    case "INIT": {
      const { isAuthenticated, user } = action.payload;
      return {
        ...state,
        user,
        isAuthenticated,
        isInitialised: true,
      };
    }
    case "LOGIN": {
      const { user } = action.payload;
      return {
        ...state,
        isAuthenticated: true,
        user,
      };
    }
    case "LOGOUT": {
      return {
        ...state,
        isAuthenticated: false,
        user: null,
      };
    }
    default: {
      return { ...state };
    }
  }
};

const AuthContext = createContext<AuthContextType>({
  ...initialState,
  login: () => Promise.resolve(),
  logout: () => Promise.resolve(),
  register: () => Promise.resolve({ user: null, verifyLinkSent: false }),
  dispatch: () => {},
});

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const logout = async () => {
    handleLogout(() => {
      dispatch({
        type: "LOGOUT",
        payload: { ...state, isAuthenticated: false },
      });
    });
  };

  useEffect(() => {
    (async () => {
      try {
        // The Id of the user. defaults to zero if the user ID does not exist
        const activeUser = getUser();
        const response = await Axios.get(
          apiRoutes.profile(activeUser ? activeUser.id : 0)
        );
        const user = response.data;

        if (user !== null) {
          dispatch({
            type: "INIT",
            payload: {
              ...state,
              isAuthenticated: true,
              user,
            },
          });
        } else {
          dispatch({
            type: "INIT",
            payload: {
              ...state,
              isAuthenticated: false,
              user: null,
            },
          });
        }
      } catch (err) {
        console.error(err);
        dispatch({
          type: "INIT",
          payload: {
            ...state,
            isAuthenticated: false,
            user: null,
          },
        });
      }
    })();
  }, []);

  if (!state.isInitialised) {
    return <PageLoader />;
  }

  return (
    <AuthContext.Provider
      value={{
        ...state,
        login: handleLogin,
        logout,
        register: handleRegister,
        dispatch,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
