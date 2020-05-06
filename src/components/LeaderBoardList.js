import React, { Component } from 'react'

export default class LeaderBoardList extends Component {
    
    
    render() {
        const { user } = this.props
        return (
            <div className='leaderboard-box'>   
                <h5>User: {user.id}</h5>
                <div className='author'>
                    <img  
                        src={user.avatarURL}
                        alt={`Avatar of ${user.id}`}
                        className='author-avatar'/>
                </div>
                <div className='questions-asked'>
                    <span>Questions asked: {user.questions.length}</span>
                </div>
                <div className='questions-answered'>
                    <span>Questions answered: {Object.keys(user.answers).length}</span>
                </div>
            </div>
        )
    }
}