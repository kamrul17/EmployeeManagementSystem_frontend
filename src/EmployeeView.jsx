import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function EmployeeView() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = () => {
    axios
      .get("http://localhost:8080/employees")
      .then((res) => setStudents(res.data))
      .catch((err) => console.log(err));
  };

  const deleteEmployee = (id) => {
    axios
      .delete(`http://localhost:8080/employees/${id}`)
      .then(() => {
        // Refresh the student list after deletion
        fetchStudents();
      })
      .catch((err) => console.log(err));
  };

  return (
    <section>
      <table className="table table-dark table-bordered table-hover ">
        <thead>
          <tr className="text-center">
            <th scope="col ">Id</th>
            <th scope="col">First Name</th>
            <th scope="col">Last Name</th>
            <th scope="col">Email</th>

            <th scope="col ">Actions</th>
          </tr>
        </thead>
        <tbody className="text-center">
          {students.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.firstName}</td>
              <td>{item.lastName}</td>
              <td>{item.email}</td>

              <td>
                <Link
                  to={`/viewEmployee/${item.id}`}
                  type="button"
                  className="btn btn-info mx-2"
                >
                  View
                </Link>

                <Link
                  to={`/updateEmployee/${item.id}`}
                  type="button"
                  className="btn btn-warning mx-2"
                >
                  Update
                </Link>

                <button
                  type="button"
                  className="btn btn-danger mx-2"
                  onClick={() => deleteEmployee(item.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}

export default EmployeeView;
