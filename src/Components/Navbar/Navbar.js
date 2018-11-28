import React, { Component } from 'react';
import './Navbar.css';
class Navbar extends Component{
  render(){
    return(
      <div>
        <div className="navbar">
          <img src="https://s3.amazonaws.com/bucket-storage-tucanton/assets/VendeTuCasa/logo-TuCanton.png" alt="" />
        </div>
      </div>
    )
  }
}

export default Navbar;
