export const getUsers = (state = [],action)=>
{
    switch(action.type) {
        case 'START_GET_USERS' : 
        return action;
        case 'COMPLETE_GET_USERS' :
            return action;
        case 'ERROR_GET_USER':
            return action;
        default:
            return state;
    }
}

export const getUsersById = (state = [],action)=>
{
    switch(action.type) {
        case 'START_GET_USERS_ById' : 
        return action;
        case 'COMPLETE_GET_USERS_ById' :
            return action;
        case 'ERROR_GET_USER_ById':
            return action;
        default:
            return state;
    }
}