import React, { Component } from 'react';
import _ from 'lodash'
import { connect } from 'react-redux';
import { removeAuthedUser } from '../actions/authedUser'
import { filterAvatars } from '../utils'
import './UserAvatar.css'

class UserAvatar extends Component {
    
    handleClick = (e) => {
        e.preventDefault()
        const { dispatch } = this.props
        dispatch(removeAuthedUser())
    }
    
    render() {
        const { authedUser, avatars } = this.props
        
        if (authedUser === null) {
            return(
                <div></div>
            )
        }

        return(
        <div className='user-avatar'>
            <img
            src={filterAvatars(avatars)}
            alt={`Avatar of ${authedUser}`}
            className='avatar'
            />
            <p>User: {authedUser}</p>
            <button 
                className='logout-button'
                onClick={this.handleClick}>
                    Logout
            </button>
        </div>
        )
    }
}

function mapStateToProps ({ authedUser, users }) {
    return {
        authedUser,
        avatars: _.map(users, user => user.id === authedUser ? user.avatarURL : null)
    }
}


export default connect(mapStateToProps)(UserAvatar)