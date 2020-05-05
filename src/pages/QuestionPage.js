import React, { Component } from 'react'
import { connect } from 'react-redux'
import LoginForm from '../components/LoginForm'
import NavigationPanel from '../components/NavigationPanel'
import UserAvatar from '../components/UserAvatar'
import QuestionDetails from '../components/QuestionDetails'
import './QuestionPage.css'

class QuestionPage extends Component {
    
    findQuestion = () => {
        const { questions, match: {params} } = this.props
        const question = questions[params.id]
        return question
    }

    render() {
        const { pages, authedUser, users, questions } = this.props
        
        if (authedUser === null) {
            return (
                <div className='home-page'>
                    <div className='nav-panel'>
                        < NavigationPanel 
                            pages={pages}/>
                    </div>
                    <div className='login-content'>
                        <h4>Please Select Your Login Details</h4>
                        <LoginForm users={users}/>
                    </div>
            </div>
            )
        }

        if (questions === undefined){
            return (
                <h3>Loading...</h3>
            )
        }

        return (
            <div className='question-page'>
                <div className='nav-panel'>
                    < NavigationPanel 
                    pages={pages}/>
                </div>
                <div className='user-avatar-panel'>
                    <UserAvatar />
                </div>
                <div className='question-page-content'>
                    <QuestionDetails question={this.findQuestion()}/>
                </div>
            </div>
        )
    }
}

function mapStateToProps ({ questions, autheduser, users }) {
    return {
        questions,
        autheduser,
        users
    }
}

export default connect(mapStateToProps)(QuestionPage)