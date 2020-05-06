import { _getQuestions, _saveQuestionAnswer, _saveQuestion } from '../_DATA'
import { saveAnswers, saveQuestionUser } from './users'

export const RECIEVE_QUESTIONS = 'RECIEVE_QUESTIONS'
export const VOTE_QUESTION = 'VOTE_QUESTION'
export const SAVE_QUESTION = 'SAVE_QUESTION'

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

export function saveQuestion (question) {
    return {
        type: SAVE_QUESTION,
        question
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

export function sendSaveQuestion (author, optionOne, optionTwo) {
    return (dispatch) => {
        return _saveQuestion({ author, optionOne, optionTwo })
            .then((question) => {
                dispatch(saveQuestion(question))
                dispatch(saveQuestionUser(author, question.id))
            })
    }
}

export function sendVoteQuestion (authedUser, qid, answer) {
    return (dispatch) => {
        return _saveQuestionAnswer({ authedUser, qid, answer })
            .then(() => {
                dispatch(voteQuestion(authedUser, qid, answer))
                dispatch(saveAnswers(authedUser, qid, answer))
            })
    }
}