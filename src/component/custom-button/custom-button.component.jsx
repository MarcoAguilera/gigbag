import React from 'react';
import styled, {css} from 'styled-components';

const Button = styled.button`
    background-color: ${props => props.color || "white" };

    width: 45px;
    width: 225px;
    color: white;
    font-weight: 600;
    font-size: 18px;
    border: none;
    padding: 7px;
    border-radius: 3px;
    font-family: inherit;
    cursor: pointer;
`;

const CustomButton = ({name, handleClick, color}) => {
    return (
        <Button color={color} onClick={handleClick} >{name}</Button>
    )
};

export default CustomButton;