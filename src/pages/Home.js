import React, { Component } from 'react';
import NavigationPanel from '../components/NavigationPanel'

export default class Home extends Component {
    render() {
        const { pageTitle, pages } = this.props
        return(
            <div className='home-page'>
                <div className='nav-panel'>
                    < NavigationPanel 
                    pageTitle={pageTitle}
                    pages={pages}/>
                </div>
                <div className='home-content'>Home</div>
            </div>
        )
    }
}