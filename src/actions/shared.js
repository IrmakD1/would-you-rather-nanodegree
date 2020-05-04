import { getUsers } from './users'
import { getQuestions } from './questions'

export function handleInitialData () {
    return (dispatch) => Promise.all([
        dispatch(getUsers()),
        dispatch(getQuestions()),
    ])
}

