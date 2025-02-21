import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddEmployee() {
  const navigate = useNavigate();
  const data = { firstName: "", lastName: "", email: "" };
  const [inputData, setInputData] = useState(data);
  const handleInput = (e) => {
    setInputData({ ...inputData, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8080/employees", inputData)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
    navigate("/EmployeeView");
  };
  return (
    <div className="d-flex justify-content-center ">
      <form onSubmit={handleSubmit} className="w-50 border p-5">
        <div className="mb-3">
          <label htmlFor="exampleInputName" className="form-label">
            firstName
          </label>
          <input
            type="text"
            className="form-control"
            name="firstName"
            id="firstName"
            required
            value={inputData.firstName}
            onChange={handleInput}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputName" className="form-label">
            lastName
          </label>
          <input
            type="text"
            className="form-control"
            name="lastName"
            id="lastName"
            required
            onChange={handleInput}
            value={inputData.lastName}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            name="email"
            id="email"
            required
            onChange={handleInput}
            value={inputData.email}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}

export default AddEmployee;
