import React from 'react';
import PropTypes from 'prop-types'
import {Redirect} from 'react-router'

export default class UserItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isRedirected: false
          }
        this.onClick = this.onClick.bind(this);
    }
    onClick(e)
    {
        this.setState({isRedirected: true})
    }
    render() { 
        const {name,last_name,id,facebook} = this.props
        if(this.state.isRedirected)
        {
            return(<Redirect
            to = {"/detail/" + id}
            />)
        }
        return ( 
            <div className="card" onClick={this.onClick}>
            <div className="card-content">
                <div className="UserItem-rightbox">
                <img className="UserItem-image"
                src="https://www.w3schools.com/howto/img_avatar.png" alt="profile"/> 
                </div>
                <div className="UserItem-leftbox">
                <h3 className = "UserItem-name">{name +" " +last_name} </h3>                
                <h3 className = "UserItem-facebook">{facebook} </h3>
                </div>
                                
                </div>
            </div>
         );
    }
}
 
UserItem.proptype = {
    name: PropTypes.string.isRequired,
    lastname: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    facebook: PropTypes.string
}
 