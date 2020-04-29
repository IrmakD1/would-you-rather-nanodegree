import React, { Component } from 'react';
import _ from 'lodash'
import './LoginForm.css'
import { connect } from 'react-redux';
import { setAuthedUser } from '../actions/authedUser'

class LoginForm extends Component {
    state = {
        text: '', 
        toHome: false,
        error: false
    }

    handleChange = (e) => {
        const text = e.target.value

        this.setState(() => ({
            text
        }))
    }

    handleSubmit = (e) => {
        e.preventDefault()

        const { text } = this.state
        const { dispatch, users, resetState } = this.props
        
        _.forEach(users, user => {
            if(text === user.id) {
                dispatch(setAuthedUser(user.id))
            } else {
                this.setState(() => ({
                    error: true
                }))
            }
        })

        this.setState(() => ({
            text: ''
        }))
        resetState()
    }

    render() {
        const { text, error } = this.state

        if (error === true) {
            return (
                <form className='login-form' onSubmit={this.handleSubmit}>
                <label className='login-error'>Incorrect Username</label>
                <input
                    type="text"
                    placeholder='Username'
                    value={text}
                    onChange={this.handleChange}
                />
                <button 
                type='submit'
                disabled={text === ''}>
                    Submit
                </button>
            </form>
            )
        }

        return(
            <form className='login-form' onSubmit={this.handleSubmit}>
                <input
                    type="text"
                    placeholder='Username'
                    value={text}
                    onChange={this.handleChange}
                />

                <button 
                type='submit'
                disabled={text === ''}>
                    Submit
                </button>
            </form>
        )
    }
}

export default connect()(LoginForm)