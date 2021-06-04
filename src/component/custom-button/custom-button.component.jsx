import React from 'react';
import styled, {css} from 'styled-components';

const Button = styled.button`
    background-color: ${props => props.color || "white" };

    width: ${props=> props.width || "225px"};
    color: white;
    font-weight: 600;
    font-size: 18px;
    border: none;
    padding: 7px;
    border-radius: 3px;
    font-family: inherit;
    cursor: pointer;
`;

const CustomButton = ({name, handleClick, color, width}) => {
    return (
        <Button color={color} onClick={handleClick} width={width} >{name}</Button>
    )
};

export default CustomButton;