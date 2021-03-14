import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "../Button";
import "./Login.scss";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function validateForm() {
    //console.log(email, password)
    return email.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
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