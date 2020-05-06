import { _getUsers } from '../_DATA'

export const RECEIVE_USERS = 'RECEIVE_USERS'
export const SAVE_ANSWERS = 'SAVE_ANSWERS'

export function receiveUsers (users) {
    return {
        type: RECEIVE_USERS,
        users
    }
}

export function saveAnswers (authedUser, id, answer) {
    return {
        type: SAVE_ANSWERS,
        authedUser,
        id,
        answer
    }
}

export function getUsers () {
    return (dispatch) => {
        return _getUsers()
            .then((users) => {
                dispatch(receiveUsers(users))
            })
    }
}