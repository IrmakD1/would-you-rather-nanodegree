import React, { Component } from 'react';
import './UserAvatar.css'

export default class UserAvatar extends Component {
    render() {
        const { user } = this.props
        return(
        <div className='user-avatar'>
            <p>User: {user}</p>
        </div>
        )
    }
}