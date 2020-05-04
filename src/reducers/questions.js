import { RECIEVE_QUESTIONS } from '../actions/questions'
import { VOTE_QUESTION } from '../actions/questions'

export default function questions (state = {}, action) {
    switch(action.type) {
        case RECIEVE_QUESTIONS :
            return {
                ...state,
                ...action.questions
            }
        case VOTE_QUESTION :
            const { authedUser, id, vote } = action
            return {
                ...state,
                [id] : {
                    ...state[id],
                    [vote] : {
                        ...state[id][vote],
                        votes: state[id][vote].votes.concat([authedUser])
                    }
                }
            }
        default :
            return state
    }
}