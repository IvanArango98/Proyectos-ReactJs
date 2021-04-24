import React from 'react';
import './index.css'

export default class UserDetailCover extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cover: 'https://upload.wikimedia.org/wikipedia/commons/f/f4/User_Avatar_2.png'
          }
    }
    render() {
        const {firstName,lastName} = this.props  
        console.log(this.props)              
        return (  
          <div className="UserDetailCover">
              
            <div className="UserDetailCover-arriba">
                <img src={this.state.cover}
                className="UserDetailCover-img"
                alt="img"
                ></img>                
            </div>

            <div className="UserDetailCover-abajo">
            <h3 className = "UserDetailCover-name">{firstName +" " +lastName} </h3>                
            </div>
            
            </div>
        );
    }
}
 
 