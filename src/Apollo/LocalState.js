export const defaults = {
  isLoggedIn: Boolean(localStorage.getItem("token")) || false
};

export const resolvers = {
  Mutation: {
    logUserIn: (_, { token }, { cache }) => {
      if (token !== "" && token !== undefined) {
        localStorage.setItem("token", token);
        cache.writeData({
          data: {
            isLoggedIn: true
          }
        });
        return true;
      }
      return false;
    },
    logUserOut: (_, __, { cache }) => {
      localStorage.removeItem("token");
      window.location.reload();
      return null;
    }
  }
};
