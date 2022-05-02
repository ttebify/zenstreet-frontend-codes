export const apiRoutes = {
  login: "/api/v1/login/",
  logout: "/api/v1/logout",
  register: "/api/v1/register/",
  profile: (id: number) => `/api/v1/user/${id}`,
  csrf: "/sanctum/csrf-cookie/",
  forgotPassword: "/api/v1/forgot-password",
  resetPassword: "/api/v1/reset-password",
};
