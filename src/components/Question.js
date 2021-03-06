import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link, withRouter } from 'react-router-dom'
import { formatDate } from '../utils'
import './Question.css'

class Question extends Component {
    render() {
        const { question } = this.props
        const { optionOne, optionTwo, timestamp, id } = question
        
        return (
            <Link to={`/questions/${id}`} className='question'>
                <div className='question-info'>
                    <h5>Would You Rather?</h5>
                    <div>
                        <p>{optionOne.text}</p>
                        <span>OR</span>
                    </div>
                    <div>
                        <p>{optionTwo.text}</p>
                    </div>
                    <div className='date'>{formatDate(timestamp)}</div>
                </div>
            </Link>
        )
    }
}

function mapStateToProps ({ questions }, {id} ) {
    const question = questions[id]

    return {
        question: question
    }
}

export default withRouter(connect(mapStateToProps)(Question))