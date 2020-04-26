import React from 'react';
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { checkPrimary } from '../../utils/index'
import Button from './Button'
import './ButtonGroup.css'

export default class ButtonGroup extends React.Component {

    render() {
        const { pages, pageTitle } = this.props
        return(
                <ul className='button-list'>
                    {pages.map(page => (
                        <li key={page.id}>
                            <Link to={`${page.root}`}>
                                <Button 
                                    text={page.name}
                                    buttonType={checkPrimary(page.name, pageTitle)}
                                    root={page.root}
                                />
                            </Link>
                        </li>
                    ))}
                </ul>
        )
    }
}

ButtonGroup.propTypes = {
    buttonType: PropTypes.string
}
