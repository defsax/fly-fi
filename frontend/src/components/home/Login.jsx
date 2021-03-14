import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "../Button";
import "./Login.scss";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <div className="Login">
      <form autoComplete="off" onSubmit={handleSubmit}>
        <div className="FormLabel">
          <Form.Label>Email</Form.Label>
        </div>
        <div className="InputLabel">
          <Form.Control
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="FormLabel">  
          <Form.Label>Password</Form.Label>
        </div>
        <div className="InputLabel">
          <Form.Control
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="button-submit">  
        <Button text="submit" disabled={!validateForm()}/>
        </div>
      </form>
    </div>
  );
}