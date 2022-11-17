import React from 'react';
import './Button.css';

export default props => {
    return (
            <button 
                onClick={e => props.click && props.click(props.label)}
                className={`
                button
                ${props.operation ? 'operation' : ''}
                ${props.double ? 'double' : ''}
                ${props.triple ? 'triple' : ''}
            `}>
                <p className='btn-3d'>
                    {props.label}
                </p>
            </button>
    )
}