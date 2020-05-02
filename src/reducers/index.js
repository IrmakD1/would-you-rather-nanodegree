import { combineReducers } from 'redux'
import users from './users'
import authedUser from './authedUser'
import questions from './questions'
import homeState from './homeState'

export default combineReducers({
    users,
    authedUser,
    questions,
    homeState,
})