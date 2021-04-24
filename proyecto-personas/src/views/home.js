import React from 'react';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {getUsers} from '../actions'
import UserItem from '../components/UserItem'
import 'materialize-css/dist/css/materialize.min.css'
import '../views/index.css'
import {PacmanLoader} from 'react-spinners'

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    componentWillMount()
    {
      this.props.getUsers();
    }
    render() { 
        let users = [];

        if(this.props.users.data)
        {
            users = this.props.users.data.map((currentValue, index, array) =>
            {
                return(<UserItem
                key={index}
                name={currentValue.name}
                last_name={currentValue.last_name}
                facebook = {currentValue.facebook}
                id={currentValue.id}
                
                />);
            })
        }

        if(this.props.users.type === "START_GET_USERS")
        {
            return(
                <div className="Home-preLoader">
            {/*https://www.davidhu.io/react-spinners/*/}
            <PacmanLoader
            className = "UserItem-PacMan"
            color="#FFF"
            loading={true}
            />
            </div>            
            );
        }
        
        return (
            <div className="Home">  
                {users}               
            </div>

          );
    }
}
 
//Esta funcion convierte el valor de la store que yo quiero
//En propiedades para el componente
function mapStateToProps(state)
{
    return {
        users: state.getUsers
    }
}

function mapDispatchToProps(dispatch)
{
    return bindActionCreators({
        getUsers
    },dispatch)
}
export default connect(mapStateToProps,mapDispatchToProps) (Home);

