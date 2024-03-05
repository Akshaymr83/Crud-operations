import React, { useState } from 'react';
import axios from 'axios';


const Form = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState('');

  const handleName = (e) => { setName(e.target.value); }
  const handleAge = (e) => { setAge(e.target.value); }
  const handleEmail = (e) => { setEmail(e.target.value); }

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = { name, age, email };

    axios.post('http://localhost:7000/post', formData)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
      
  }

  return (
    <form>
      <input type='text' placeholder='Name...' value={name} onChange={handleName} />
      <br />

      <input type='number' placeholder='Age...' value={age} onChange={handleAge} />
      <br />

      <input type='email' placeholder='Email...' value={email} onChange={handleEmail} />
      <br />

      <button type='submit' onClick={handleSubmit}>Submit</button>
    </form>
  );
}

export default Form;