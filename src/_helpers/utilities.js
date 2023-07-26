export const isAuthorized = (userRole, authorizedRoles) => {
  return generateRoles(userRole).some((role) => authorizedRoles.includes(role));
};

export const generateRoles = (userRoles) => {
  return Object.entries(
    Object.freeze({
      Admin: 1,
      Student: 2,
      Institute: 3,
      Instructor: 4,
      Parent: 5,
    })
  )
    .filter(([key, value]) => userRoles.includes(value))
    .map(([key, value]) => key);
};
