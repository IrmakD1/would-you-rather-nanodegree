import React from 'react';
import PropTypes from 'prop-types';
import './Button.css'

export default class Button extends React.Component {
    render() {
        const { text, buttonType } = this.props
        return(
        <button className={`button-is-${buttonType}`}>{`${text}`}</button>
        )
    }
}

Button.propTypes = {
    buttonType: PropTypes.string
}

Button.defaultProps = {
    buttonType: 'primary'
}