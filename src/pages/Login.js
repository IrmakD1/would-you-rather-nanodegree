import React, { Component } from 'react';
import LoginForm from '../components/LoginForm'
import NavigationPanel from '../components/NavigationPanel'
import './Login.css'

export default class Login extends Component {
    render() {
        const { pageTitle, pages } = this.props
        return(
            <div className='login-page'>
                <div className='nav-panel'>
                    <NavigationPanel 
                        pageTitle={pageTitle}
                        pages={pages}/>
                </div>
                <div className='login-content'>
                <h4>Please Select Your Login Details</h4>
                    <LoginForm />
                </div>
            </div>
        )
    }
}