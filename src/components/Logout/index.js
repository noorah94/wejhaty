import React, { useEffect } from "react";

import { useNavigate } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { login2, logout2 } from "./../../reducers/login";

export default function Logout() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const data = {
      token: "",
      role: "",
      ID: "",
    };
    dispatch(logout2(data));
    navigate("/");
  }, []);

  return <div></div>;
}
