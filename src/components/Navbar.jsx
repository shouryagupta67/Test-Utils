import React from "react"
import PropTypes from 'prop-types'


 function Navbar(props){
    return(
      <nav className={`navbar navabr-${props.mode} bg-${props.mode}`}>
  <div className="container-fluid">
    <a className="navbar-brand">{props.Title}</a>
    <a className="about" href="/">About</a>
   
    <form className="d-flex" role="search">
    
      <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
      <button className="btn btn-outline-success" type="submit">Search</button>
    </form>
    <div className={`form-check form-switch text-${props.mode===`light`?`dark`:`light`}`}>
  <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
  <label className="form-check-label" for="flexSwitchCheckDefault ">Dark Mode</label>
</div>
  </div>
 
 
</nav>
    )
}
export default Navbar
Navbar.PropTypes={Title:PropTypes.string}
Navbar.defaultProps={Title:'set time'}