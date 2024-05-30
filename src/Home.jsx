import React from "react";
import { Link } from "react-router-dom";
function Home() {
  return (
    <div className="container bgColor">
      <div className="row d-flex justify-content-center ">
        <div className="col-md-8 text-center p-5  ">
          <h3 className="my-2">Welcome to Employee Management System</h3>
          <p className="my-5">
            This is a simple Employee Management System where you can manage
            Employee records.
          </p>
          <Link to="/EmployeeView" className="btn btn-primary">
            View Employees
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
