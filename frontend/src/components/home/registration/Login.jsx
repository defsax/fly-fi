import React, { useState } from "react";
import axios from "axios";
import Form from "react-bootstrap/Form";
import Button from "../../Button";
import "../../../styles/scss/form.scss";

export default function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { handleLogin, display, hideForm } = props;
  console.log(display);

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  async function handleSubmit(event) {
    event.preventDefault();
    axios.post('/login', {user: {email: email, password: password}}, {withCredentials: true})
    .then(response => {
      console.log("logged in: ", response);
      handleLogin(response);
    })
    .catch((error) => {
      console.log("logging in error: ", error);
    });
  }

  return (
    <div className="form">
      <form 
        autoComplete="off" 
        onSubmit={handleSubmit}
        className="form--login"
      >
        <h3>Please Log In:</h3>
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
        <div>  
          <Button 
            text="Submit" 
            disabled={!validateForm()}
            className="--submit"
            onClick={hideForm}
          />
          <Button 
            text="Cancel" 
            disabled={!validateForm()}
            className="--cancel"
            onClick={hideForm}
          />
        </div>
      </form>
    </div>
  );
}