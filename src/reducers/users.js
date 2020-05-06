import { RECEIVE_USERS } from '../actions/users'
import { SAVE_ANSWERS } from '../actions/users'

export default function users (state = {}, action) {
    switch(action.type) {
        case RECEIVE_USERS :
            return {
                ...state,
                ...action.users
            }
        case SAVE_ANSWERS :
            const { authedUser, id, answer } = action
            return {
                ...state,
                [authedUser] : {
                    ...state[authedUser],
                    answers: {
                        ...state[authedUser].answers,
                        [id]: answer
                    }
                }
            }
        default :
            return state
    }
} 