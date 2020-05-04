import { _getQuestions, _saveQuestionAnswer } from '../_DATA'

export const RECIEVE_QUESTIONS = 'RECIEVE_QUESTIONS'
export const VOTE_QUESTION = 'VOTE_QUESTION'

export function recieveQuestions (questions) {
    return {
        type: RECIEVE_QUESTIONS,
        questions
    }
}

export function voteQuestion (authedUser, id, vote) {
    return {
        type: VOTE_QUESTION,
        authedUser,
        id,
        vote
    }
}

export function getQuestions () {
    return (dispatch) => {
        return _getQuestions()
            .then((questions) => {
                dispatch(recieveQuestions(questions))
            })
        }
}

export function sendVoteQuestion (authedUser, qid, answer) {
    return (dispatch) => {
        return _saveQuestionAnswer({ authedUser, qid, answer })
            .then(() => {
                dispatch(voteQuestion(authedUser, qid, answer))
            })
    }
}