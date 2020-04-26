import { _getQuestions } from '../_DATA'

export const RECIEVE_QUESTIONS = 'RECIEVE_QUESTIONS'

export function recieveQuestions (questions) {
    return {
        type: RECIEVE_QUESTIONS,
        questions
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