export const SET_HOME_STATE = 'SET_HOME_STATE'
export const TOGGLE_HOME_STATE = 'TOGGLE_HOME_STATE'

export function setHomeState (defaultHomeState) {
    return {
        type: SET_HOME_STATE,
        defaultHomeState
    }
}

export function toggleHomeState () {
    return {
        type: TOGGLE_HOME_STATE,
    }
}