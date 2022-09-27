import React from "react";

function Login() {
  function handleSubmit(event) {
    event.preventDefault();
    alert(`Username is ${event.target.username.value} and password is${event.target.password.value}`)
    console.log("I submit");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input id="username" type="text" name="username" placeholder="Enter username..." />
      <input id="password" type="password" name="password" placeholder="Enter password..." />
      <button>Login</button>
    </form>
  );
}

export default Login;
