import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom'
import NavigationPanel from '../components/NavigationPanel'
import UserAvatar from '../components/UserAvatar'
import './Home.css'

class Home extends Component {
    render() {
        const { pageTitle, pages, authedUser } = this.props

        if (authedUser === null) {
            return <Redirect to='/' />
        }

        return(
            <div className='home-page'>
                <div className='nav-panel'>
                    < NavigationPanel 
                    pageTitle={pageTitle}
                    pages={pages}/>
                </div>
                <div className='user-avatar-panel'>
                    <UserAvatar user={authedUser}/>
                </div>
                <div className='home-content'>
                    <h4>Would You Rather Questions...</h4>
                </div>
            </div>
        )
    }
}

function mapStateToProps ({authedUser}) {
    return {
        authedUser: authedUser
    }
}

export default connect(mapStateToProps)(Home)