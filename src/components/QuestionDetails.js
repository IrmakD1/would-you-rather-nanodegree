import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash'
import LoginForm from '../components/LoginForm'
import { sendVoteQuestion } from '../actions/questions'
import { formatDate } from '../utils'
import { filterAvatars } from '../utils'
import NoMatch from './NoMatch'
import './QuestionDetails.css'

class QuestionDetails extends Component {
    
    percentage = (votes1, votes2) => {
        const total = votes1.length + votes2.length
        const result = (votes1.length/total)*100.
        return result.toFixed(0)
    }

    authorAvatar = (users, question) => {
        const avatars = _.map(users, user => user.id === question.author ? user.avatarURL : null)
        return filterAvatars(avatars)
    }

    handleSubmit = option => e => {
        e.preventDefault()
        const { dispatch, question, authedUser } = this.props
        let vote = ''
        if (option === 'optionOne') vote = 'optionOne'
        else vote ='optionTwo' 

        dispatch(sendVoteQuestion(authedUser, question.id, vote))
    }

    checkStyle = (questionOption, authedUser) => {
        return _.includes(questionOption.votes, authedUser) ? 'primary' : 'secondary'
    }

    setButtonState = (option1, option2, authedUser) => {
        if (_.includes(option1.votes, authedUser) || _.includes(option2.votes, authedUser)){
            this.setState({answered: true})
        }
    }
    
    render() {
        const { question, questions, authedUser, users } = this.props

        if(authedUser === null ) {
            return (
                <div className='login-content'>
                        <h4>Please Select Your Login Details</h4>
                        <LoginForm users={users}/>
                </div>
            )
        }
        
        if (question === undefined){
            return (
                <NoMatch/>
            )
        }

        if (question !== undefined) {
            const questionIds = Object.keys(questions)
            if (!(_.includes(questionIds, question.id))) {
                return (
                    <NoMatch/>
                )
            } else {
                return (
                    <div className='question-box'>
                    <div className='author'>
                        <img  
                        src={this.authorAvatar(users, question)}
                        alt={`Avatar of ${authedUser}`}
                        className='author-avatar'/>
                        <span>created by: {question.author}</span>
                    </div>
                    <h5>Would You Rather?</h5>
                    <div>
                        <p>{question.optionOne.text}</p>
                        <button 
                            className={`button-is-${this.checkStyle(question.optionOne, authedUser)}`}
                            disabled={_.includes(question.optionOne.votes, authedUser) || _.includes(question.optionTwo.votes, authedUser)}
                            onClick={this.handleSubmit('optionOne')}>
                                Vote</button>
                        <span>{`${this.percentage(question.optionOne.votes, question.optionTwo.votes)}% of the votes`}</span>
                        <div>
                            <span>Votes: {question.optionOne.votes.length}</span>
                        </div>    
                    </div>
                        <p>OR</p>
                    <div>
                        <p>{question.optionTwo.text}</p>
                        <button 
                            className={`button-is-${this.checkStyle(question.optionTwo, authedUser)}`}
                            disabled={_.includes(question.optionOne.votes, authedUser) || _.includes(question.optionTwo.votes, authedUser)}
                            onClick={this.handleSubmit('optionTwo')}>
                                Vote</button>
                        <span>{`${this.percentage(question.optionTwo.votes, question.optionOne.votes)}% of the votes`}</span>
                        <div>
                            <span>Votes: {question.optionTwo.votes.length}</span>
                        </div>
                    </div>
                    <div></div>
                    <div className='date'>{formatDate(question.timestamp)}</div>
                </div>
                )
            }

        }

    }
}

function mapStateToProps ({ authedUser, users, questions }) {
    return {
        authedUser,
        users,
        questions
    }
}

export default connect(mapStateToProps)(QuestionDetails)