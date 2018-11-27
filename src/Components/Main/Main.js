import React, { Component }  from 'react';
import './Main.css'
class Main extends Component{
  render(){
    return(
      <div className="main">
        <div className="formLogin">
          <h3>Hermes Generator</h3>
          <form>
            <input placeholder="Usuario" />
            <input placeholder="Contraseña" type="password"/>
          </form>
          <button type="button" className="btn btn-primary">Ingresar</button>
        </div>
      </div>
    )
  }
}

export default Main;
