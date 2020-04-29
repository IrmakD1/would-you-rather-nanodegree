import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash'
import LoginForm from '../components/LoginForm'
import NavigationPanel from '../components/NavigationPanel'
import UserAvatar from '../components/UserAvatar'
import Question from '../components/Question'
import './Home.css'

class Home extends Component {

    state = {
        displayAnswered: false,
        answeredButton: {
            primary: false
        },
        unansweredButton: {
            primary: true
        }
    }

    handleChange = (e) => {
        e.preventDefault()

        const { displayAnswered, answeredButton, unansweredButton } = this.state
        this.setState(() => ({
            displayAnswered: !displayAnswered,
            answeredButton:{
                primary: !answeredButton.primary
            },
            unansweredButton: {
                primary: !unansweredButton.primary
            }
        }))
        
    }

    //Should I move this to the store?
    resetState = () => {
        this.setState(() => ({
            displayAnswered: false,
            answeredButton: {
                primary: false
            },
            unansweredButton: {
                primary: true
            }
        }))
    }

    getAnsweredQuestionList = (displayAnswered) => {
        const { authedUser, questions } = this.props
        if (displayAnswered == false) {
            const unansweredIds = _.map(questions, question => {
                if(!(_.includes(question.optionOne.votes, authedUser)) && !(_.includes(question.optionTwo.votes, authedUser))) {
                    return question.id
                } else {
                    return null
                }
            })
            const filteredUnansweredIds = _.filter(unansweredIds, id => id != null)
            return filteredUnansweredIds
        }
        if (displayAnswered == true) {
            const answeredIds = _.map(questions, question => {
                if (_.includes(question.optionOne.votes, authedUser) || _.includes(question.optionTwo.votes, authedUser)) {
                    return question.id
                } else {
                    return null
                }
            })
            const filteredAnsweredIds = _.filter(answeredIds, id => id != null)
            return filteredAnsweredIds
        }
    }

    checkStyle = (buttonName) => {
        const { answeredButton, unansweredButton } = this.state
        if(buttonName === unansweredButton && unansweredButton.primary === true) return 'primary'
        if(buttonName === unansweredButton && unansweredButton.primary === false) return 'secondary'
        if(buttonName === answeredButton && answeredButton.primary === true) return 'primary'
        if(buttonName === answeredButton && answeredButton.primary === false) return 'secondary'
    }

    render() {
        const { pageTitle, pages, authedUser, users, questionIds } = this.props
        const { displayAnswered, answeredButton, unansweredButton } = this.state
        

        if (authedUser === null) {
            return (
                <div className='home-page'>
                    <div className='nav-panel'>
                        < NavigationPanel 
                            pageTitle={pageTitle}
                            pages={pages}/>
                    </div>
                    <div className='login-content'>
                        <h4>Please Select Your Login Details</h4>
                        <LoginForm users={users} resetState={this.resetState}/>
                    </div>
            </div>
            )
        }

        return(
            <div className='home-page'>
                <div className='nav-panel'>
                    < NavigationPanel 
                    pageTitle={pageTitle}
                    pages={pages}/>
                </div>
                <div className='user-avatar-panel'>
                    <UserAvatar />
                </div>
                <div className='home-content'>
                    <h4>Choose Wisely</h4>
                    <button 
                        className={`button-is-${this.checkStyle(unansweredButton)}`}
                        disabled={unansweredButton === 'primary'}
                        onClick={this.handleChange}>
                            Unanswered
                    </button>
                    <button 
                        className={`button-is-${this.checkStyle(answeredButton)}`}
                        disabled={answeredButton === 'primary'}
                        onClick={this.handleChange}>
                            Answered
                    </button>
                    <ul className='questions-list'>
                        {this.getAnsweredQuestionList(displayAnswered).map((id) => (
                            <li key={id}>
                                <Question id={id}/>
                            </li>
                        ))}   
                    </ul>
                </div>
            </div>
        )
    }
}

function mapStateToProps ({users, authedUser, questions}) {
    return {
        users,
        authedUser,
        questions,
        // questionIds:  Object.keys(questions)
        // .sort((a,b) => questions[b].timestamp - questions[a].timestamp)
    }
}

export default connect(mapStateToProps)(Home)