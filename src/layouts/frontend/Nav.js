import React from 'react'
import { Link } from 'react-router-dom';

export default function Nav() {


  if(!localStorage.getItem('token')){

    var AuthBtn = '';
    AuthBtn = (
          <li className="nav-item">
            <Link className="nav-link" to="/login">
              <i className="fa fa-lock"></i> Login
            </Link>
          </li>
        );
    }

  return (
    <div>
      <div className='container-fluid'>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link className="navbar-brand" to="#">
            Navbar
            </Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
                {AuthBtn}
            </ul>
            </div>
        </nav>
      </div>
    </div>
  )
}
