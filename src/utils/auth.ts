import Axios from "./axios";
import { apiRoutes } from "./routes";
import type {
  LoginPostValues,
  RegisterPostValues,
} from "../components/Forms/types";
import { isBrowser, navigateToPath } from ".";

export interface AuthUserState {
  id: number;
  lastname: string;
  email: string;
  token?: string;
}

export type RegisterApiResponse = {
  verifyLinkSent: boolean;
  user: AuthUserState | null;
};

export const getUser = (): AuthUserState | null => {
  if (isBrowser()) {
    const user = window.localStorage.getItem("zenstreetUser");
    return user ? JSON.parse(user) : null;
  } else {
    return null;
  }
};

export const setUser = (user: AuthUserState) => {
  isBrowser() &&
    window.localStorage.setItem("zenstreetUser", JSON.stringify(user));
};

// Token
export const getToken = (): string | null => {
  if (isBrowser()) {
    const token = window.localStorage.getItem("userToken");
    return token ? JSON.parse(token) : null;
  } else {
    return null;
  }
};

const setToken = (token: string | null) => {
  isBrowser() &&
    window.localStorage.setItem("userToken", JSON.stringify(token));
};

export const handleRegister = async (data: RegisterPostValues) => {
  return Axios.post(apiRoutes.register, {
    ...data,
  }).then((res) => {
    const result = res.data as RegisterApiResponse;
    return result;
  });
};

export const handleLogin = async (data: LoginPostValues) => {
  // first post to laravel sanctum
  return Axios.get(apiRoutes.csrf).then(async () => {
    const res = await Axios.post(apiRoutes.login, { ...data });
    const { headers } = res.config;
    if (headers && headers["X-XSRF-TOKEN"]) {
      const token = headers["X-XSRF-TOKEN"] as string;
      // set the token
      setToken(token);
      navigateToPath("/app/drawer");
    } else {
      throw new Error("Failed to login");
    }
  });
};

export const sendPasswordResetLink = async (email: string) => {
  return Axios.post(apiRoutes.forgotPassword, { email }).then((res) => {
    const status = res.data.status as string;
    return status;
  });
};

interface ResetPasswordParams {
  email: string;
  token: string;
  password: string;
  password_confirmation: string;
}
export const resetPassword = async (data: ResetPasswordParams) => {
  return Axios.post(apiRoutes.resetPassword, { ...data }).then((res) => {
    const status = res.data.status as string;
    return status;
  });
};

export const handleLogout = async (callback: () => void) => {
  const token = getToken();
  console.log(token);
  if (token) {
    Axios.post(apiRoutes.logout, {}, { headers: { "X-XSRF-TOKEN": token } })
      .then(() => {
        navigateToPath("/app/login");
        setToken(null);
        callback();
      })
      .catch((e) => {
        console.log(e, "Failed to logout");
      });
  }
};
