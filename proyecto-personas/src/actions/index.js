import http from './http'

//getUsers
const startGetUsers = () => {return {type: 'START_GET_USERS',ready:false}}
const CompleteGetUsers = (data) => {return {type: 'COMPLETE_GET_USERS',data}}
const errorGetUsers = (err) => {return {type: 'ERROR_GET_USERS',err}}

const startGetUsersById = () => {return {type: 'START_GET_USERS_ById',ready:false}}
const CompleteGetUsersById = (data) => {return {type: 'COMPLETE_GET_USERS_ById',data}}
const errorGetUsersById = (err) => {return {type: 'ERROR_GET_USERS_ById',err}}


export const getUsers = () =>{
    

    return (dispatch, getState) =>
        {
            dispatch(startGetUsers());
            http.get('users/').then((response) =>
            {
                if(response.data)
                {
                    dispatch(CompleteGetUsers(response.data))
                }
                console.log(response);
            }).catch((err)=>{
                console.log(err)
                dispatch(errorGetUsers(err))
            })
        }
    //TODO Request con axios
}


export const getUsersById = (userId) =>{
    
    return (dispatch, getState) =>
        {
            dispatch(startGetUsersById());
            http.get('users/'+userId).then((response) =>
            {
                if(response.data)
                {
            
                    dispatch(CompleteGetUsersById(response.data))
                }
                
            }).catch((err)=>{
                console.log(err)
                dispatch(errorGetUsersById(err))
            })
        }
    //TODO Request con axios
}