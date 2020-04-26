import React, { Component } from 'react';
import { connect } from 'react-redux'
import LoginForm from '../components/LoginForm'
import NavigationPanel from '../components/NavigationPanel'
import UserAvatar from '../components/UserAvatar'
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
                <div className='leader-board-content'>Leader Board</div>
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