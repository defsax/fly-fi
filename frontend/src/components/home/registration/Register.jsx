import React, { useState } from "react";
import axios from 'axios';
import Form from "react-bootstrap/Form";
import Button from "../../Button";
import "../../../styles/css/form.css";

export default function Register(props) {

  const { handleLogin, hideForm } = props;

  const [error, setError] = useState({
    display: "none",
    message: ""
  });

  console.log(error.display);
  const [fields, setFields] = useState({
    name: "",
    email: "",
    phoneNumber:"+1",
    password: "",
    confirmPassword: "",
    //confirmationCode: "",
  });

  //const [newUser, setNewUser] = useState(null);
  const reset = function () {
    setFields({
      name: "",
      email: "",
      phoneNumber:"+1",
      password: "",
      confirmPassword: "",
      //confirmationCode: "",
    });
  }

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
    
    axios.post('/user', {user: {name: fields.name, email: fields.email, phone: fields.phoneNumber, password: fields.password}})
    .then(response => {
      //setNewUser
      //set user as logged in
      //show signed in
      //unmount register component 
      //show last component
      if (!response.data.errors) {
        handleLogin(response);
        reset();
        hideForm();
      }
      else {
        setError({display: "block", message: response.data.errors[0]});
        console.log("Error: ", response.data.errors[0]);
      }
    })
    .catch(error => console.log(error));
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
      <div className="form">
        <form 
          autoComplete="off" 
          onSubmit={handleSubmit}
          className='form--register'  
        >
          <h3>Please Register:</h3>
          
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

          <p style={{display: error.display}}>{error.message}</p>

          <section>
            <Button
              type="submit"
              text="Register"
              disabled={!validateForm()}
              className="--submit"
            />
            <Button
              type="button"
              text="Cancel"
              disabled={false}
              className="--cancel"
              onClick={hideForm}
            />
          </section>
        </form>
      </div>
    );
  }

  return (
    <div>
      {renderForm()}
    </div>
  );
}