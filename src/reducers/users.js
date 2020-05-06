import { RECEIVE_USERS } from '../actions/users'
import { SAVE_ANSWERS, SAVE_QUESTION_USER } from '../actions/users'

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
        case SAVE_QUESTION_USER :
            return {
                ...state,
                [action.author]: {
                    ...state[action.author],
                    questions: state[action.author].questions.concat([action.id])
                }
            }
        default :
            return state
    }
} 