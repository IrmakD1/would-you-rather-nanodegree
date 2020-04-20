import React, { Component } from 'react';
import NavigationPanel from '../components/NavigationPanel'

export default class NewQuestion extends Component {
    render() {
        const { pageTitle, pages } = this.props
        return(
            <div className='new-question-page'>
                <div className='nav-panel'>
                    < NavigationPanel 
                    pageTitle={pageTitle}
                    pages={pages}/>
                </div>
                <div className='new-question-content'>New Question</div>
            </div>
        )
    }
}