import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import NavigationPanel from '../components/NavigationPanel'

class Leaderboard extends Component {
    render() {
        const { authedUser } = this.props

        if (authedUser === null) {
            return <Redirect to='/' />
        }

        const { pageTitle, pages } = this.props
        return(
            <div className='leader-board-page'>
                <div className='nav-panel'>
                    < NavigationPanel 
                    pageTitle={pageTitle}
                    pages={pages}/>
                </div>
                <div className='leader-board-content'>Leader Board</div>
            </div>
        )
    }
}

function mapStateToProps ({authedUser}) {
    return {
        authedUser: authedUser
    }
}

export default connect(mapStateToProps)(Leaderboard)