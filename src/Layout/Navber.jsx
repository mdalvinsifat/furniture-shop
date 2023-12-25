import React from 'react';
import { NavLink } from 'react-router-dom';

const Navber = () => {
    return (
        <div>
   <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid ">
<h2 className='ms-5'> Hekto
 </h2>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-auto">
        <li className="nav-item">
     
         <NavLink to="/" className="nav-link active text-decoration-none" aria-current="page" href="#">Home
         </NavLink>
        </li>
        <li className="nav-item">
         

          <NavLink to="/product" className="nav-link active text-decoration-none" href="#">Product
          </NavLink>
        </li>
    
        <li className="nav-item">
     

          <NavLink to="/about" className="nav-link active text-decoration-none" href="#">About
          </NavLink>
        </li>
    
        <li className="nav-item">
          <NavLink to="/blog" className="nav-link active text-decoration-none" href="#">Blog
          </NavLink>
        </li>
    
        <li className="nav-item">
      
          <NavLink to="/contact" className="nav-link active text-decoration-none" href="#">Contact</NavLink>
    
        </li>
    
       
      </ul>
      <form className="d-flex me-5">
        <input className="form-control me-1" type="search" placeholder="Search" aria-label="Search" />
        <button className="btn btn-danger" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>

        </div>
    );
};


export default Navber;