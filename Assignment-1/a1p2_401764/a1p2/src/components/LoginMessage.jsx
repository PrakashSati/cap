// src/components/LoginMessage.jsx

import React from "react";

function LoginMessage({ isLoggedIn }) {
  return <div>{isLoggedIn ? <p>Hello User!</p> : <p>Acess Deniad</p> }</div>;
}

export default LoginMessage;
