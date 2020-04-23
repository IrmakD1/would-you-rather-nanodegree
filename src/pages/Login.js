import React, { Component } from 'react';
import { connect } from 'react-redux'
import LoginForm from '../components/LoginForm'
import NavigationPanel from '../components/NavigationPanel'
import './Login.css'

class Login extends Component {
    
    render() {    
        const { pageTitle, pages, users } = this.props

        return(
            <div className='login-page'>
                <div className='nav-panel'>
                    <NavigationPanel 
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
}

function mapStateToProps ({users}) {
    return {
        users: users
    }
}

export default connect(mapStateToProps)(Login)