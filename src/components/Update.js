import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate,useParams } from 'react-router-dom';

function Update() {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [email,setEmail]=useState('');
  const { id } = useParams();
const navigate=useNavigate();


  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleAgeChange = (e) => {
    setAge(e.target.value);
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  useEffect(() => {
    axios.get(`http://localhost:7000/getUserById/${id}`)
      .then((result) => {
        console.log(result);
        setName(result.data.name);
        setAge(result.data.age);
        setEmail(result.data.email);
      })
      .catch(err => console.log(err));
  }, [id]);


  const handleUpdate = () => {
    axios.put(`http://localhost:7000/update/${id}, { name, place }`)
      .then((res) => {
        console.log(res);
        navigate('/view');
      })
      .catch((err) => console.log(err));
  };


  return (
    <div>
      <input type="text" placeholder="name" value={name} onChange={handleNameChange} /><br></br>
      <input type="number" placeholder="age" value={age} onChange={handleAgeChange} /><br></br>
      <input type="email" placeholder="email" value={email} onChange={handleEmailChange} />
      <button onClick={handleUpdate}>Update</button>
    </div>
  );
}

export default Update;