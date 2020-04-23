import { _getUsers } from '../_DATA'
import { receiveUsers } from './users'

//Need to add question to the object deconstructor when more actions are added
export function handleInitialData () {
    return (dispatch) => {
        return _getUsers()
            .then(( users ) => {
                dispatch(receiveUsers(users))
            })
    }
}
