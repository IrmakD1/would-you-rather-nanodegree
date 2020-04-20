import React, { Component } from 'react'
import { ButtonGroup } from './form'
import './NavigationPanel.css'

export default class NavigationPanel extends Component {
    //TODO Add propsTypes
    
    render() {
        const { pageTitle, pages } = this.props
        return(
            <div className='navigation-buttons'>
                <ButtonGroup 
                    pages={pages}
                    pageTitle={pageTitle}
                />
            </div>
        )
    }
}