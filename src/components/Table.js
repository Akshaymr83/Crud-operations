
// /////////////
import React, { useEffect, useState } from "react";
import axios from "axios";

import { Link } from "react-router-dom";

const Table = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:7000/getdata")
      .then((result) => {
        console.log(result.data);
        setData(result.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []); // Add an empty dependency array to run the effect only once
  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:7000/delete/${id}`)
      .then((res) => {
        console.log("deleted");
        window.location.reload();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <h2>Table</h2>
      <table>
        <thead>
          <tr>
            <td>Name</td>
            <td>Age</td>
            <td>Email</td>
            <td colSpan={2}>Action</td>
          </tr>
        </thead>
        <tbody>
          {data.map((values, index) => (
            <tr key={index}>
              <td>{values.name}</td>
              <td>{values.age}</td>
              <td>{values.email}</td>
              <td>
                <Link to={`/update/${values._id}`}>
                <button>Edit</button>
                </Link>
              </td>
              <td>
                {/* <button onClick={handleDelete()}>Delete</button> */}
                <button onClick={() => handleDelete(values._id)}>Delete</button>

              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
