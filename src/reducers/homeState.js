import { SET_HOME_STATE, TOGGLE_HOME_STATE } from '../actions/homeState'

export default function homeState (state = null, action) {
    switch (action.type) {
        case SET_HOME_STATE : 
            return action.defaultHomeState
        case TOGGLE_HOME_STATE :
            return {
                ...state,
                displayAnswered: !state.displayAnswered,
                answeredButton: {
                    primary: !state.answeredButton.primary
                },
                unansweredButton: {
                    primary: !state.unansweredButton.primary
                }
            }
        default :
            return state
    }
}