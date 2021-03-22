import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Form from 'react-bootstrap/Form';
import Button from '../../Button';
import '../../../styles/css/form.css';

export default function MyFlights(props) {
  const { handleLogin, hideForm } = props;
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [error, setError] = useState({
    display: 'none',
    message: '',
  });

  useEffect(() => {
    //clear error box while typing
    setError({
      display: 'none',
      message: '',
    });
  }, [email, password]);

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  async function handleSubmit(event) {
    event.preventDefault();

    axios
      .post(
        '/login',
        { user: { email: email, password: password } },
        { withCredentials: true }
      )
      .then((response) => {
        console.log('(axios log in)', response);
        if (!response.data.errors) {
          handleLogin(response);
          hideForm();
        } else {
          setError({ display: 'block', message: response.data.errors[0] });
        }
      })
      .catch((error) => {
        console.log('logging in error: ', error);
      });
  }

  return (
    <div className='form'>
      <h3>THIS IS A LIST OF MyFLIGHTS:</h3>
      <Button
        type='button'
        text='Close'
        disabled={false}
        className='--cancel'
        onClick={hideForm}
      />
    </div>
  );
}
