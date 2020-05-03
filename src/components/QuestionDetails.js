import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash'
import { Link, withRouter } from 'react-router-dom'
import LoginForm from '../components/LoginForm'
import { formatDate } from '../utils'
import { filterAvatars } from '../utils'
import './QuestionDetails.css'

class QuestionDetails extends Component {
    render() {
        const { question, authedUser, users, avatars } = this.props
        
        if(authedUser === null ) {
            return (
                <div className='login-content'>
                        <h4>Please Select Your Login Details</h4>
                        <LoginForm users={users}/>
                </div>
            )
        }
        
        if (this.props.question === undefined){
            return (
                <h4>Loading...</h4>
            )
        }

        return (
            <div className='question-box'>
            <div className='author'>
                <img  
                src={filterAvatars(avatars)}
                alt={`Avatar of ${authedUser}`}
                className='author-avatar'/>
                <span>created by: {authedUser}</span>
            </div>
            <h5>Would You Rather?</h5>
            <div>
                <p>{question.optionOne.text}</p>
                <button>Choose</button>
                <span>Votes: {question.optionOne.votes.length}</span>
            </div>
                <p>OR</p>
            <div>
                <p>{question.optionTwo.text}</p>
                <button>Choose</button>
                <span>Votes: {question.optionTwo.votes.length}</span>
            </div>
            <div></div>
            <div className='date'>{formatDate(question.timestamp)}</div>
        </div>
        )
    }
}

function mapStateToProps ({ authedUser, users }) {
    return {
        authedUser,
        avatars: _.map(users, user => user.id === authedUser ? user.avatarURL : null),
        users
    }
}

export default withRouter(connect(mapStateToProps)(QuestionDetails))