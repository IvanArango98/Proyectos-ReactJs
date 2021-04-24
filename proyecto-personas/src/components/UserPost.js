import React from 'react';
import './index.css'
import PropTypes from 'prop-types'

class UserPost extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        const {title,message} = this.props
        return (
            <div className="UserPost">
                <h1>{title}</h1>
                <h2>{message}</h2>
            </div>
          );
    }
}
 
UserPost.propTypes = {
    id: PropTypes.any,
    title: PropTypes.string,
    message: PropTypes.string
}

export default UserPost;