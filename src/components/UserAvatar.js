import React, { Component } from 'react';
import _ from 'lodash'
import { connect } from 'react-redux';
import { removeAuthedUser } from '../actions/authedUser'
import './UserAvatar.css'

class UserAvatar extends Component {
    
    handleClick = (e) => {
        e.preventDefault()
        const { dispatch } = this.props
        dispatch(removeAuthedUser())
    }

    filterAvatars= (avatars) => avatars.filter(avatar => avatar != null)
    
    render() {
        const { authedUser, avatars } = this.props
        
        return(
        <div className='user-avatar'>
            <img
            src={this.filterAvatars(avatars)}
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