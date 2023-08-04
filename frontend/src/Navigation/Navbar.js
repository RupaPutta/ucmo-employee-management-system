import React from "react";

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNavDropdown">
    <ul className="navbar-nav">
      <li className="nav-item">
        <a className="nav-link" href="http://localhost:3000/departments">Departments <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="http://localhost:3000/employees">Employees </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="http://localhost:3000/payrolls">Payrolls</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="http://localhost:3000/checkInCheckOuts">CheckIn CheckOuts</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="http://localhost:3000/admins">Admin</a>
      </li>
    </ul>
  </div>
</nav>
    )
}

export default Navbar