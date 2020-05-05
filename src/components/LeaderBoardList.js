import React, { Component } from 'react'
import { connect } from 'react-redux'

class LeaderBoardList extends Component {
    render() {
        const { user } = this.props
        return (
            <div className='leaderboard-box'>   
                <h3>{user.id}</h3>
            </div>
        )
    }
}

function mapStateToProps({ questions }) {
    return {
        questions
    }
}  

export default connect(mapStateToProps)(LeaderBoardList)