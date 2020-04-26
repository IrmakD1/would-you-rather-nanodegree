import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import NavigationPanel from '../components/NavigationPanel'
import UserAvatar from '../components/UserAvatar'

class NewQuestion extends Component {
    render() {
        const { authedUser } = this.props

        if (authedUser === null) {
            return <Redirect to='/' />
        }

        const { pageTitle, pages } = this.props
        return(
            <div className='new-question-page'>
                <div className='nav-panel'>
                    < NavigationPanel 
                    pageTitle={pageTitle}
                    pages={pages}/>
                </div>
                <div className='user-avatar-panel'>
                    <UserAvatar />
                </div>
                <div className='new-question-content'>New Question</div>
            </div>
        )
    }
}

function mapStateToProps ({authedUser}) {
    return {
        authedUser: authedUser
    }
}

export default connect(mapStateToProps)(NewQuestion)