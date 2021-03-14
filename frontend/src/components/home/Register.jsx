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
    //confirmationCode: "",
  });

  //const [newUser, setNewUser] = useState(null);

  function validateForm() {  
    //console.log(fields);
    if (fields.email && fields.password) {
      return (fields.password === fields.confirmPassword)
    } else {
      return false;
    }
  }

  // function validateVerificationForm() {
  //   return fields.confirmationCode && true;
  // }

  async function handleSubmit(event) {
    event.preventDefault();
    //setNewUser("verify-phone");
  }

  // async function handleVerify(event) {
  //   event.preventDefault();
  // }

  // function renderConfirmationForm() {
  //   return (
  //     <form onSubmit={handleVerify}>
  //       <div className="FormLabel">
  //         <Form.Label>Confirmation Code</Form.Label>
  //       </div>
  //       <div className="InputLabel">
  //         <Form.Control
  //           type="tel"
  //           onChange={setFields}
  //           value={fields.confirmationCode}
  //         />
  //         </div>
  //         <Form.Text>Please check your phone for the code.</Form.Text>
  //       <div className="button-submit">
  //         <Button
  //           text="verify"
  //           disabled={!validateVerificationForm()}
  //         />
  //       </div>
  //     </form>
  //   );
  // }

  function renderForm() {
    return (
      <form autoComplete="off" onSubmit={handleSubmit}>
        <section className="FormLabel">
          <Form.Label>Name</Form.Label>
        </section>
        <section className="InputLabel">
          <input
            name="name"
            type="text"
            placeholder= "Enter Your Name"
            value={fields.name}
            onChange={e => setFields({...fields, name: e.target.value})}
          /> 
        </section>
        <section className="FormLabel">
          <Form.Label>Email</Form.Label>
        </section>
        <section className="InputLabel">
          <input
            name="email"
            type="text"
            placeholder= "Enter Your Email"
            value={fields.email}
            onChange={e => setFields({...fields, email: e.target.value})}
          />
        </section>
        <section className="FormLabel">
          <Form.Label>Phone Number</Form.Label>
        </section>
        <section className="InputLabel">
          <input
            name="phoneNumber"
            type="tel"
            placeholder= "Enter Your Phone Number"
            value={fields.phoneNumber}
            onChange={e => setFields({...fields, phoneNumber: e.target.value})}
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
            value={fields.password}
            onChange={e => setFields({...fields, password: e.target.value})}
          />
        </section>
        <section className="FormLabel">
            <Form.Label>Confirm Password</Form.Label>
        </section>
        <section className="InputLabel">
          <input
            name="confirmPassword"
            type="password"
            placeholder= "Confirm Your Password"
            value={fields.confirmPassword}
            onChange={e => setFields({...fields, confirmPassword: e.target.value})}
          />
        </section>
        <section className="button-submit">
          <Button
            block
            type="submit"
            variant="success"
            text="register"
            disabled={!validateForm()}
          />
          </section>
      </form>
    );
  }

  return (
    <div className="Login">
      {renderForm()}
    </div>
  );
}