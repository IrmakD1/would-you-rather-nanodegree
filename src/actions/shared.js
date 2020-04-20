import { _getUsers } from '../_DATA'
import { receiveUsers } from './users'

export function handleInitialData () {
    return (dispatch) => {
        return _getUsers()
            .then(({ users }) => {
                dispatch(receiveUsers(users))
            })
    }
}
