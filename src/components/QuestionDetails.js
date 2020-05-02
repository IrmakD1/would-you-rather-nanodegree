import React, { Component } from 'react'
import { connect } from 'react-redux'
import LoginForm from './LoginForm'
import NavigationPanel from './NavigationPanel'

class QuestionDetails extends Component {
    
    findQuestion = () => {
        const { questions, match: {params} } = this.props
        const question = questions[params.id]
        console.log(question);
        return JSON.stringify(question)
    }

    render() {
        // if (authedUser === null) {
        //     return (
        //         <div className='home-page'>
        //             <div className='nav-panel'>
        //                 < NavigationPanel 
        //                     pageTitle={pageTitle}
        //                     pages={pages}/>
        //             </div>
        //             <div className='login-content'>
        //                 <h4>Please Select Your Login Details</h4>
        //                 <LoginForm users={users}/>
        //             </div>
        //     </div>
        //     )
        // }

        return (
            <h4>{this.findQuestion()}</h4>
        )
    }
}

function mapStateToProps ({ questions, autheduser }) {
    return {
        questions,
        autheduser
    }
}

export default connect(mapStateToProps)(QuestionDetails)