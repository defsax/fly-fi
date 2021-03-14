import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "../Button";
import "./Login.scss";

export default function Register() {
  const [fields, setFields] = useState({
    name: "",
    email: "",
    phoneNumber:0,
    password: "",
    confirmPassword: "",
    confirmationCode: "",
  });

  const [newUser, setNewUser] = useState(null);

  function validateForm() {  
    console.log(fields);
    if (fields.email && fields.password) {
      return (fields.password === fields.confirmPassword)
    } else {
    return false
    }
  }

  function validateVerificationForm() {
    return fields.confirmationCode && true;
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setNewUser("verify-phone");
  }

  async function handleVerify(event) {
    event.preventDefault();
  }

  function renderConfirmationForm() {
    return (
      <form onSubmit={handleVerify}>
        <div className="FormLabel">
          <Form.Label>Confirmation Code</Form.Label>
        </div>
        <div className="InputLabel">
          <Form.Control
            type="tel"
            onChange={setFields}
            value={fields.confirmationCode}
          />
          </div>
          <Form.Text>Please check your phone for the code.</Form.Text>
        <div className="button-submit">
          <Button
            text="verify"
            disabled={!validateVerificationForm()}
          />
        </div>
      </form>
    );
  }

  function renderForm() {
    return (
      <form onSubmit={handleSubmit}>
          <div className="FormLabel">
          <Form.Label>Name</Form.Label>
          </div>
          <div className="InputLabel">
          <Form.Control
            type="text"
            value={fields.name}
            onChange={setFields}
          /> </div>
          <div className="FormLabel">
          <Form.Label>Email</Form.Label>
          </div>
          <div className="InputLabel">
          <Form.Control
            type="email"
            value={fields.email}
            onChange={setFields}
          /></div>
          <div className="FormLabel">
          <Form.Label>Phone Number</Form.Label>
          </div>
          <div className="InputLabel">
          <Form.Control
            type="tel"
            value={fields.phoneNumber}
            onChange={setFields}
          /></div>
          <div className="FormLabel">
          <Form.Label>Password</Form.Label>
          </div>
          <div className="InputLabel">
          <Form.Control
            type="password"
            value={fields.password}
            onChange={setFields}
          /></div>
          <div className="FormLabel">
            <Form.Label>Confirm Password</Form.Label>
          </div>
          <div className="InputLabel">
          <Form.Control
            type="password"
            onChange={setFields}
            value={fields.confirmPassword}
          /></div>
          <div className="button-submit">
          <Button
            block
            type="submit"
            variant="success"
            text="register"
            disabled={!validateForm()}
          /></div>
      </form>
    );
  }

  return (
    <div className="Login">
      {newUser === null ? renderForm() : renderConfirmationForm()}
    </div>
  );
}