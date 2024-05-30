import "./App.css";
import ViewEmployee from "./ViewEmployee";
import Navbar from "./Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import AddEmployee from "./AddEmployee";
import UpdateEmployee from "./UpdateEmployee";
import EmployeeView from "./EmployeeView";
function App() {
  return (
    <main className="container">
      <div className="row">
        <Router>
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Home />}></Route>
            <Route
              exact
              path="/EmployeeView"
              element={<EmployeeView />}
            ></Route>
            <Route exact path="/AddEmployee" element={<AddEmployee />}></Route>
            <Route path="/updateEmployee/:id" element={<UpdateEmployee />} />
            <Route path="/viewEmployee/:id" element={<ViewEmployee />} />
          </Routes>
        </Router>
      </div>
    </main>
  );
}

export default App;
