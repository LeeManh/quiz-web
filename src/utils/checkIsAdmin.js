export const checkIsAdmin = (roles) => {
  return roles?.some((role) => role === "admin");
};
