import React, { Component } from 'react';
import { connect } from 'react-redux';
import { removeAuthedUser } from '../actions/authedUser'
import './UserAvatar.css'

class UserAvatar extends Component {
    
    handleClick = (e) => {
        e.preventDefault()
        const { dispatch } = this.props
        dispatch(removeAuthedUser())
    }
    
    render() {
        const { authedUser } = this.props
        return(
        <div className='user-avatar'>
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

function mapStateToProps ({ authedUser }) {
    return {
        authedUser: authedUser
    }
}


export default connect(mapStateToProps)(UserAvatar)