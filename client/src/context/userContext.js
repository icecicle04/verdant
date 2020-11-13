import React from "react";
const userContext = React.createContext({
  jwt: "",
  setJwt: () => {},
});

export default userContext;