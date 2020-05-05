import React, { Component } from 'react';
import { connect } from 'react-redux'
import _ from 'lodash'
import LoginForm from '../components/LoginForm'
import NavigationPanel from '../components/NavigationPanel'
import UserAvatar from '../components/UserAvatar'
import LeaderBoardList from '../components/LeaderBoardList'
import './Leader-board.css'

class Leaderboard extends Component {
    render() {
        const { pageTitle, pages, authedUser, users } = this.props

        if (authedUser === null) {
            return (
                <div className='leader-board-page'>
                    <div className='nav-panel'>
                        < NavigationPanel 
                            pageTitle={pageTitle}
                            pages={pages}/>
                    </div>
                    <div className='login-content'>
                        <h4>Please Select Your Login Details</h4>
                        <LoginForm users={users}/>
                    </div>
            </div>
            )
        }

        if (users === undefined) {
            return (
                <h3>Loading...</h3>
            )
        }

        return(
            <div className='leader-board-page'>
                <div className='nav-panel'>
                    < NavigationPanel 
                    pageTitle={pageTitle}
                    pages={pages}/>
                </div>
                <div className='user-avatar-panel'>
                    <UserAvatar />
                </div>
                <div className='leader-board-content'>
                    <h3>Leader Board</h3>
                <ul className='leader-board-list'>
                    {_.map(users, user => (
                        <li key={user.id}>
                            <LeaderBoardList user={user}/>
                        </li>
                    ))}
                </ul>
                </div>
            </div>
        )
    }
}

function mapStateToProps ({ users, authedUser }) {
    return {
        users,
        authedUser
    }
}

export default connect(mapStateToProps)(Leaderboard)