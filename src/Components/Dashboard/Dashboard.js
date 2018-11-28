import React, { Component } from 'react';
import Navbar from '../Navbar/Navbar';
import Menu  from '../Menu/Menu';
class Dashboard extends Component{
  render(){
    return(
      <div>
        <Navbar/>
        <Menu/>
      </div>
    )
  }
}


export default Dashboard;
