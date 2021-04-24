import React from 'react';
import './index.css'
import 'materialize-css/dist/css/materialize.min.css'
import FacebookLogin from 'react-facebook-login'
import GoogleLogin from 'react-google-login'
import {Redirect } from 'react-router-dom'

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {   
            isLogged:false,                
          }
          this.responseFacebook = this.responseFacebook.bind(this);
          this.onFailure = this.onFailure.bind(this);
          this.responseGoogle = this.responseGoogle.bind(this);
    }

    componentWillMount()
    {
        if(localStorage.getItem("fbData")|| localStorage.getItem("googleData"))    
        {
            this.setState({isLogged:true})
        }
    }
    responseFacebook(response)
    {
        //console.log(response)
        localStorage.setItem("fbData",JSON.stringify({
            token: response.token,
            email: response.email,
            name: response.name,
            picture: response.picture.data.url,
            social: "fb"
        }))

        this.setState({isLogged:true})                
    }

    responseGoogle(response)
    {
        console.log(response)
        localStorage.setItem("googleData", 
        JSON.stringify(
            {
                token: response.token,
                email: response.profileObj.email,
                name: response.profileObj.name,
                picture: response.profileObj.imageUrl,
                social: "google"
            }
        )
        )
        this.setState({isLogged:true})    
    }
    onFailure(error)
    {
        console.log(error)
    }
    render() { 
        if(this.state.isLogged)
        {
            return (<Redirect to="home"/>)
        }
        return (             
            <div className="Login">                      
                <div className="Login-box"> 
                    <div className="card">          
                        <div className="card-content">
                            
                            <h5>Login</h5>                
                            <br></br>
                            <FacebookLogin
                            appId="491240295650628"
                            autoLoad={false}   
                            fields="name,email,picture.width(120)"  
                            callback={ this.responseFacebook}                       
                            onFailure={this.onFailure}
                            textButton="Facebook"     
                            cssClass="waves-effect waves-light btn  light-blue darken-4"
                            icon="fa fa-facebook"                            
                            />                            
                                <br></br>

                            <GoogleLogin
                            clientId="627355732789-aieiidihm7qb0ri5intqtb4a4lpb827o.apps.googleusercontent.com"
                            autoLoad={false}
                            onSuccess={this.responseGoogle}
                            onFailure={this.onFailure}                            
                            className="waves-effect waves-light btn  red darken-2"                            
                            >
                            <span>Iniciar sesión</span>
                            </GoogleLogin>

                        </div>      
                    </div>
                </div>       
            </div>

         );
    }
}
 
export default Login;