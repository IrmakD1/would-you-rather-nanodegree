import React, { Component } from 'react';
import NavigationPanel from '../components/NavigationPanel'

export default class Leaderboard extends Component {
    render() {
        const { pageTitle, pages } = this.props
        return(
            <div className='leader-board-page'>
                <div className='nav-panel'>
                    < NavigationPanel 
                    pageTitle={pageTitle}
                    pages={pages}/>
                </div>
                <div className='leader-board-content'>Leader Board</div>
            </div>
        )
    }
}