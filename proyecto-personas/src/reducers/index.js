import { combineReducers} from 'redux'
import {getUsers, getUsersById } from './UserReducer'

export default combineReducers({
    getUsers,
    getUsersById
});