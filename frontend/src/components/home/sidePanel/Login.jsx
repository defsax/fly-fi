import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Form from "react-bootstrap/Form";
import Button from "../../Button";
import "./Login.scss";

export default function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { handleLogin } = props;

  function validateForm() {
    //console.log(email, password)
    return email.length > 0 && password.length > 0;
  }

  async function handleSubmit(event) {
    event.preventDefault();
    axios.post('/login', {user: {email: email, password: password}}, {withCredentials: true})
    .then(response => {
      console.log("logged in: ",response);
      handleLogin(response.data.user);
      localStorage.setItem('user', response.data);
    })
    .catch((error) => {
      console.log("logging in error: ", error);
    });
  }

  return (
    <div className="Login">
      <form autoComplete="off" onSubmit={handleSubmit}>
        <section className="FormLabel">
          <Form.Label>Email</Form.Label>
        </section>
        <section className="InputLabel">
          <input
            name="email"
            type="text"
            placeholder= "Enter Your Email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
        </section>
        <section className="FormLabel">
          <Form.Label>Password</Form.Label>
        </section>
        <section className="InputLabel">
        <input
            name="password"
            type="password"
            placeholder= "Enter Your Password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
          </section>
        <div className="button-submit">  
        <Button text="submit" disabled={!validateForm()}/>
        </div>
      </form>
    </div>
  );
}