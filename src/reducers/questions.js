import { RECIEVE_QUESTIONS } from '../actions/questions'
import { VOTE_QUESTION, SAVE_QUESTION } from '../actions/questions'

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
        case SAVE_QUESTION : 
            const { question } = action
            return {
                ...state,
                [question.id]: question
            }
        default :
            return state
    }
}