import React from 'react';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {getUsersById} from '../actions/index'
import UserDetailCover from '../components/UserDetailCover'
import UserDetailBody from '../components/UserDetailBody'


class UserDetail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

 componentWillMount()
    {
        this.props.getUsersById(this.props.match.params.userId)
        
    }
    render() { 
        if(this.props.userDetail.data)
        {
            const {name,last_name,messages} = this.props.userDetail.data        
            return (
            <div>
            <UserDetailCover firstName={name} lastName={last_name}/>
            <UserDetailBody messages={messages}/>
            </div>
            )
        }
        return (<div></div>);
    }
}

function mapStateToProps(state)
{   
    return {userDetail: state.getUsersById
    }            
}

function mapDispatchToProps(dispatch)
{
    return bindActionCreators({
        getUsersById
    },dispatch)
    
}
 
export default connect(mapStateToProps,mapDispatchToProps)(UserDetail);