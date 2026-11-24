import React from 'react'
import PropTypes from 'prop-types'
// import { useState } from 'react'

export default function Navbar(props){

// {
//   const [mode, setMode] = useState({
//   backgroundColor: 'Black',
//   color: 'White'
// })
// const[btnText , setBtnText] = useState('Enable Light Mode');

//   const ModeChange = () => {
//   if (mode.color === "White") {
//     setMode({
//       backgroundColor: 'White',
//       color: 'Black'
//     });
//     setBtnText('Enable Dark Mode');
//     console.log("hi");
//   } else {
//     setMode({
//       backgroundColor: 'Black',
//       color: 'White'
//     });
//     setBtnText('Enable Light Mode');
//     console.log("hello");
//   }
// }}

  return (
<nav className={`navbar navbar-expand-lg ${props.mode === 'dark' ? 'bg-dark navbar-dark' : 'bg-light navbar-light'}`}>
    <div className="container-fluid" >
    <a className="navbar-brand" href="/">{props.bran}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">{props.ome}</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">{props.lick}</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">About</a>
        </li>
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>


        <div className={`form-check form-switch mx-5 text-${props.mode==='light'?'dark':'light'}`}>
  <input className="form-check-input" onChange={props.togelMode} type="checkbox" role="switch" id="switchCheckDefault"/>
  <label className="form-check-label" htmlFor="switchCheckDefault">hi</label>
</div>
      </form>
    </div>
  </div>
</nav>
  );

}

Navbar.propTypes = {
  ome: PropTypes.string.isRequired,
  lick: PropTypes.string.isRequired,
  bran: PropTypes.string.isRequired
}
Navbar.defaultProps = {
  ome: 'Home',
  lick: 'About',
  bran: 'TextUtil',
}






