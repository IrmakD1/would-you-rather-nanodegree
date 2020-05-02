import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash'
import { toggleHomeState, setHomeState } from '../actions/homeState'
import LoginForm from '../components/LoginForm'
import NavigationPanel from '../components/NavigationPanel'
import UserAvatar from '../components/UserAvatar'
import Question from '../components/Question'
import './Home.css'

class Home extends Component {

    defaultHomeState = {
        displayAnswered: false,
        answeredButton: {
            primary: false
            },
        unansweredButton: {
            primary: true
            }
    }
    
    componentDidMount() {
        this.props.dispatch(setHomeState(this.defaultHomeState))
    }

    handleChange = (e) => {
        e.preventDefault()
        this.props.dispatch(toggleHomeState())
    }

    orderTimestamp = (questions) => {
        const { questionIds } = this.props 
        const orderedIds = []
        _.forEach(questionIds, id => {
            _.forEach(questions, question => {
                if (question.id === id) orderedIds.push(id)
            })
        })
        return orderedIds
    }

    getAnsweredQuestionList = (displayAnswered) => {
        const { authedUser, questions } = this.props
        if (displayAnswered === false) {
            const unanswered = _.map(questions, question => {
                if(!(_.includes(question.optionOne.votes, authedUser)) && !(_.includes(question.optionTwo.votes, authedUser))) {
                    return question
                } else {
                    return null
                }
            })
            const filteredUnanswered = _.filter(unanswered, id => id != null)
            return this.orderTimestamp(filteredUnanswered)
        }
        if (displayAnswered === true) {
            const answered = _.map(questions, question => {
                if (_.includes(question.optionOne.votes, authedUser) || _.includes(question.optionTwo.votes, authedUser)) {
                    return question
                } else {
                    return null
                }
            })
            const filteredAnswered = _.filter(answered, id => id != null)
            return this.orderTimestamp(filteredAnswered)
        }
    }

    checkStyle = (buttonName) => {
        const { homeState } = this.props
        const { answeredButton, unansweredButton } = homeState
        if(buttonName === unansweredButton && unansweredButton.primary === true) return 'primary'
        if(buttonName === unansweredButton && unansweredButton.primary === false) return 'secondary'
        if(buttonName === answeredButton && answeredButton.primary === true) return 'primary'
        if(buttonName === answeredButton && answeredButton.primary === false) return 'secondary'
    }

    render() {
        const { pageTitle, pages, authedUser, users, homeState } = this.props
        

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
                        <LoginForm users={users}/>
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
                        className={`button-is-${this.checkStyle(homeState.unansweredButton)}`}
                        disabled={homeState.unansweredButton === 'primary'}
                        onClick={this.handleChange}>
                            Unanswered
                    </button>
                    <button 
                        className={`button-is-${this.checkStyle(homeState.answeredButton)}`}
                        disabled={homeState.answeredButton === 'primary'}
                        onClick={this.handleChange}>
                            Answered
                    </button>
                    <ul className='questions-list'>
                        {this.getAnsweredQuestionList(homeState.displayAnswered).map((id) => (
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

function mapStateToProps ({users, authedUser, questions, homeState}) {
    return {
        users,
        authedUser,
        questions,
        homeState,
        questionIds:  Object.keys(questions)
        .sort((a,b) => questions[b].timestamp - questions[a].timestamp)
    }
}

export default connect(mapStateToProps)(Home)