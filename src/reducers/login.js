const instialState = {
  role: "",
  token: "",
  ID: "",
  username: "",
};

const signIn = (state = instialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case "LOGIN":
      const { role, token, ID, username } = payload;
      localStorage.setItem("token", token);
      localStorage.setItem("role", role);
      localStorage.setItem("ID", ID);
      localStorage.setItem("username", username);
      return { role, token, ID, username };
    case "LOGOUT":
      localStorage.clear();
      return payload;

    default:
      return state;
  }
};

export default signIn;

export const login2 = (data) => {
  return {
    type: "LOGIN",
    payload: data,
  };
};

export const logout2 = (data) => {
  return {
    type: "LOGOUT",
    payload: data,
  };
};
