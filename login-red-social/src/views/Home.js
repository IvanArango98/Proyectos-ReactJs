import React, { Component } from 'react'
import './index.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPowerOff } from '@fortawesome/free-solid-svg-icons'
import {Redirect} from 'react-router-dom'

class Home extends Component {

    constructor()
    {
      super();
      this.state={
        profileImage:'',
        fullName: '',
        isLogOut:false
      }    
      
      this.onlogout = this.onlogout.bind(this)
    }
    componentWillMount()
    {      
      let fbdata = JSON.parse(localStorage.getItem('fbData'))
      let googledata = JSON.parse(localStorage.getItem('googleData'))

      if(!fbdata && !googledata)
      {
        this.setState({isLogOut:true})
      }

      if(fbdata)
      {
        this.setState({profileImage: fbdata.picture,fullName:fbdata.name})
      }
      else if(googledata){
        this.setState({profileImage: googledata.picture,fullName:googledata.name})
      }

    }

    onlogout(e)
    {
      //Todo setear las variables de mi localstorage
      localStorage.clear();
      this.setState({isLogOut:true})
    }


  render(){
    if(this.state.isLogOut)
    {
        return (<Redirect to="/"/>)
    }

    return(
      <div className="Home">
        <nav>
          <div className="nav-wrapper">
            <a className="brand-logo">Logo</a>
            <ul id="nav-mobile" className="right hide-on-med-and-down">          
            <li>
            <img className="circle Home-avatar" src={`${this.state.profileImage}`}></img>
            </li>
            <li className="Nombre">
              {this.state.fullName}
            </li>            
            <li>
            <FontAwesomeIcon icon={faPowerOff} className="Home logout"
            onClick={this.onlogout}
            /> 
            </li>
            </ul>
          </div>

        </nav>
      </div>
    );
  }
}

export default Home;
