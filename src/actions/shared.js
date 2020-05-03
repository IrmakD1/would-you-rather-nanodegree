import { getUsers } from './users'
import { getQuestions } from './questions'
import { showLoading, hideLoading } from 'react-redux-loading'

export function handleInitialData () {
    return (dispatch) => Promise.all([
        dispatch(showLoading()),
        dispatch(getUsers()),
        dispatch(getQuestions()),
        dispatch(hideLoading())
    ])
}

