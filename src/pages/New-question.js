import React, { Component } from 'react';
import { connect } from 'react-redux'
import { sendSaveQuestion } from '../actions/questions'
import LoginForm from '../components/LoginForm'
import NavigationPanel from '../components/NavigationPanel'
import UserAvatar from '../components/UserAvatar'
import './New-question.css'

class NewQuestion extends Component {
    
    state = {
        optionOne: '',
        optionTwo: '',
    }

    handleChangeOne = (e) => {
        const optionOne = e.target.value

        this.setState(() => ({
            optionOne
        }))
    }

    handleChangeTwo = (e) => {
        const optionTwo = e.target.value

        this.setState(() => ({
            optionTwo
        }))
    }

    handleSubmit = (e) => {
        e.preventDefault()    
        const { dispatch, authedUser } = this.props
        console.log(this.state);
        

        dispatch(sendSaveQuestion(authedUser, this.state.optionOne, this.state.optionTwo))
        
        this.setState(() => ({
            optionOne: '',
            optionTwo: ''
        }))

        console.log(this.state);
        
    }
    
    render() {
        const { authedUser, users, pageTitle, pages } = this.props
        const { optionOne, optionTwo } = this.state

        console.log(this.state);
        

        if (authedUser === null) {
            return (
                <div className='new-question-page'>
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
            <div className='new-question-page'>
                <div className='nav-panel'>
                    < NavigationPanel 
                    pageTitle={pageTitle}
                    pages={pages}/>
                </div>
                <div className='user-avatar-panel'>
                    <UserAvatar />
                </div>
                <div className='new-question-content'>
                    <h3>Would You Rather...</h3>
                    <div>
                        <form className='new-question-form' onSubmit={this.handleSubmit}>
                        <input
                            type="text"
                            placeholder='Option One'
                            value={optionOne}
                            onChange={this.handleChangeOne}
                        />
                        <input
                            type="text"
                            placeholder='Option Two'
                            value={optionTwo}
                            onChange={this.handleChangeTwo}
                        />
                        <button 
                            type='submit'
                            disabled={optionOne === '' || optionTwo === ''}>
                                Submit
                        </button>
                        </form>
                    </div>
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

export default connect(mapStateToProps)(NewQuestion)