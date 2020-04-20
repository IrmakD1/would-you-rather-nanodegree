import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'
import './LoginForm.css'

export default class LoginForm extends Component {
    state = {
        text: '', 
        toHome: false,
        error: false
    }

    userList = [
        'Johnny',
        'Lisa',
        'Mark'
    ]

    handleChange = (e) => {
        const text = e.target.value

        this.setState(() => ({
            text
        }))
    }

    handleSubmit = (e) => {
        e.preventDefault()

        const { text } = this.state

        this.userList.forEach(user => {
            if(text === user) {
                this.setState(() => ({
                    toHome: true
                }))
            } else {
                this.setState(() => ({
                    error: true
                }))
            }
        });

        this.setState(() => ({
            text: ''
        }))
    }

    render() {
        const { text, toHome, error } = this.state

        if (toHome === true) {
            return <Redirect to='/home' />
        }

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